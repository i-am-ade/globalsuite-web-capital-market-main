using System;
using System.Collections.Generic;
using System.Text;
using System.Data;
using System.Data.SqlClient;
using System.Data.SqlTypes;
using BaseUtility.Business;
using Microsoft.Practices.EnterpriseLibrary.Data;
using Microsoft.Practices.EnterpriseLibrary.Data.Sql;

namespace Asset.Business
{
    public class AssetClass
    {
        #region Declarations
        private Int64 lngTransNo;
        private string strAssetClassName;
        private string strUserId;
        private string strSaveType;
        #endregion

        #region Properties
        public Int64 TransNo
        {
            set { lngTransNo = value; }
            get { return lngTransNo; }
        }
        public string AssetClassName
        {
            set { strAssetClassName = value; }
            get { return strAssetClassName; }
        }
        
        public string UserId
        {
            set { strUserId = value; }
            get { return strUserId; }
        }
        
        public string SaveType
        {
            set { strSaveType = value; }
            get { return strSaveType; }
        }
        #endregion

        #region Save
        public DataGeneral.SaveStatus Save()
        {
            DataGeneral.SaveStatus enSaveStatus = DataGeneral.SaveStatus.Nothing;
            if (!ChkTransNoExist())
            {
                enSaveStatus = DataGeneral.SaveStatus.NotExist;
                return enSaveStatus;
            }
            if (ChkNameExist())
            {
                enSaveStatus = DataGeneral.SaveStatus.NameExistAdd;
                return enSaveStatus;
            }

            DatabaseProviderFactory factory = new DatabaseProviderFactory(); SqlDatabase db = factory.Create("GlobalSuitedb") as SqlDatabase;
            SqlCommand dbCommand = null;
            if (strSaveType.Trim() == "ADDS")
            {
                dbCommand = db.GetStoredProcCommand("AssetClassAddNew") as SqlCommand;
            }
            else if (strSaveType.Trim() == "EDIT")
            {
                dbCommand = db.GetStoredProcCommand("AssetClassEdit") as SqlCommand;
            }

            db.AddInParameter(dbCommand, "TransNo", SqlDbType.BigInt, lngTransNo);
            db.AddInParameter(dbCommand, "AssetClassName", SqlDbType.VarChar, strAssetClassName.ToUpper().Trim());
            db.AddInParameter(dbCommand, "UserId", SqlDbType.VarChar, GeneralFunc.UserName.Trim());
            db.ExecuteNonQuery(dbCommand);
            enSaveStatus = DataGeneral.SaveStatus.Saved;
            return enSaveStatus;

        }
        #endregion

        #region Check TransNo Exist
        public bool ChkTransNoExist()
        {
            bool blnStatus = false;
            if (strSaveType == "EDIT")
            {
                DatabaseProviderFactory factory = new DatabaseProviderFactory(); SqlDatabase db = factory.Create("GlobalSuitedb") as SqlDatabase;
                SqlCommand oCommand = null;
                oCommand = db.GetStoredProcCommand("AssetClassChkTransNoExist") as SqlCommand;
                db.AddInParameter(oCommand, "Transno", SqlDbType.BigInt, lngTransNo);
                DataSet oDs = db.ExecuteDataSet(oCommand);
                if (oDs.Tables[0].Rows.Count > 0)
                {
                    blnStatus = true;
                }
                else
                {
                    blnStatus = false;
                }
            }
            else if (strSaveType == "ADDS")
            {
                blnStatus = true;
            }

            return blnStatus;
        }
        #endregion

        #region Check Name Exist
        public bool ChkNameExist()
        {
            bool blnStatus = false;
            DatabaseProviderFactory factory = new DatabaseProviderFactory(); SqlDatabase db = factory.Create("GlobalSuitedb") as SqlDatabase;
            SqlCommand oCommand = db.GetStoredProcCommand("AssetClassChkNameExist") as SqlCommand;
            db.AddInParameter(oCommand, "TransNo", SqlDbType.BigInt,lngTransNo);
            db.AddInParameter(oCommand, "Name", SqlDbType.VarChar,strAssetClassName.Trim().ToUpper());
            db.AddInParameter(oCommand, "SaveType", SqlDbType.VarChar, strSaveType.Trim());
            DataSet oDs = db.ExecuteDataSet(oCommand);
            if (oDs.Tables[0].Rows.Count > 0)
            {
                blnStatus = true;
            }
            return blnStatus;
        }
        #endregion


        #region Get AssetClass
        public bool GetAssetClass()
        {
            bool blnStatus = false;
            DatabaseProviderFactory factory = new DatabaseProviderFactory(); SqlDatabase db = factory.Create("GlobalSuitedb") as SqlDatabase;
            SqlCommand dbCommand = db.GetStoredProcCommand("AssetClassSelect") as SqlCommand;
            db.AddInParameter(dbCommand, "TransNo", SqlDbType.BigInt,lngTransNo);
            DataSet oDS = db.ExecuteDataSet(dbCommand);
            DataTable thisTable = oDS.Tables[0];
            DataRow[] thisRow = thisTable.Select();
            if (thisRow.Length == 1)
            {
                lngTransNo = Convert.ToInt64(thisRow[0]["TransNo"]);
                strAssetClassName = thisRow[0]["AssetClassName"].ToString();
                strUserId = thisRow[0]["UserId"].ToString();
                blnStatus = true;
            }
            return blnStatus;
        }
        #endregion

        
        

        #region Get All
        public DataSet GetAll()
        {
            DatabaseProviderFactory factory = new DatabaseProviderFactory(); SqlDatabase db = factory.Create("GlobalSuitedb") as SqlDatabase;
            SqlCommand dbCommand = db.GetStoredProcCommand("AssetClassSelectAll") as SqlCommand;
            DataSet oDS = db.ExecuteDataSet(dbCommand);
            return oDS;
        }
        #endregion

        #region Delete
        public DataGeneral.SaveStatus Delete()
        {
            DataGeneral.SaveStatus enSaveStatus = DataGeneral.SaveStatus.Nothing;
            DatabaseProviderFactory factory = new DatabaseProviderFactory(); SqlDatabase db = factory.Create("GlobalSuitedb") as SqlDatabase;
            SqlCommand oCommand = db.GetStoredProcCommand("AssetClassDelete") as SqlCommand;
            db.AddInParameter(oCommand, "TransNo", SqlDbType.BigInt, lngTransNo);
            db.AddInParameter(oCommand, "UserId", SqlDbType.VarChar, GeneralFunc.UserName);
            db.ExecuteNonQuery(oCommand);
            enSaveStatus = DataGeneral.SaveStatus.Saved;
            return enSaveStatus;
        }
        #endregion
    }
}
