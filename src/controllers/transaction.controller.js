//import user model here

const addTransaction = (req, res) => {
    //deleteTransactionByUserId api logic here
};

const getTransactionByBusinessId = (req, res) => {
    //getTransactionByUserId api logic here
};

const getTransactionByCustomerId = (req, res) => {
    //getTransactionByUserId api logic here
};

const getTransactionById = (req, res) => {
    //getTransactionById api logic here
};

const updateTransactionById = (req, res) => {
    //updateTransactionByUserId api logic here
};
const deleteTransactionById = (req, res) => {
    //deleteTransactionByUserId api logic here
};

//this API will get the amount which we will give and get 
const getAmountByBusinessId = (req, res) => {
    //deleteTransactionByUserId api logic here
};

const TransactionController = {
    addTransaction,
    getTransactionByBusinessId,
    getTransactionByCustomerId,
    getTransactionById,
    updateTransactionById,
    deleteTransactionById,
    getAmountByBusinessId
};

module.exports = TransactionController;