
const bankList = [
    'State Bank of India',
    'HDFC Bank',
    'ICICI Bank',
    'Axis Bank',
    'Punjab National Bank',
    'Bank of Baroda',
    'Canara Bank',
    'Union Bank of India',
    'IndusInd Bank',
    'Kotak Mahindra Bank',
    'Bank of India',
    'IDBI Bank',
    'Central Bank of India',
    'Yes Bank',
    'Indian Bank',
    'IDFC First Bank',
    'RBL Bank',
    'Federal Bank',
    'Karur Vysya Bank',
    'South Indian Bank'
  ];
  
  function selectBank() {
    const userInput = 'South Indian Bank';
    
    
    const selectedBank = bankList.find(bank => bank.toLowerCase() === userInput.toLowerCase());
  
    if (selectedBank) {
      console.log(`Selected Bank: ${selectedBank}`);
    } else {
      console.log('Bank not found in the list.');
    }
  }
  
  selectBank();
 

  
  
  
  
  
  