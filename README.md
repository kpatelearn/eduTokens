# eduTokens

Two separate ERC20 tokens have been created called EDU Scores (EDU) and another called ED2. 
EDU contract address = 0xb58e0bf63fbe4e5565ab719d3369058707ab6a02
ED2 contract address = 0x7a358856Ef91F5CF4bb250254E3A60B0aF4038A0

For the purposes of demonstration, EDU represents a Maths test and ED2 represents an English test.  

Only one user currently has access to the maths test.
This user has the public address of 0xEfB332f4c211a590e57413a9341e9CEcd71A2ff5. 
There is an input for a password, but this is non-functional for the demonstration.  
There is then a demonstration assessment code which is ‘1234’
An assessor address is then asked for. 
The demonstration assessor has a public address of 0x0D1Ba01D6F5eA78b6e936a760d024E36b7884cD8
The simple Maths test that follows is auto-marking in the browser and the mark can be obtained by clicking 'JavaScript score'
Tokens have been transferred to the users address by the 'assessment provider (me) to represent a score of 67%. This can be viewed by clicking on 'Blockchain score'

A link to an English test can be found at the bottom of the page. 
The English student demonstration user address is 0xA5eC6C97F31F931CA564cFEF1f3efD68c74F50EC
This example illustrates a test that would need to be marked by a human. 
You can 'mark' this test by entering A or not for Qn1, M or not for Qn2 and E or not for Qn3.
Using a 'top-down' NCEA marking algorithm, the overall grade will be determined by clicking 'JavaScript grade' 
Two ED2 tokens have been transferred to this users address to indicate a grade of "Merit" 
Through Web3.js, the browser will read the blockchain and translate the 2 tokens into a grade of "Merit."
This can be viewed by clicking the 'Blockchain grade" button. 

A link to a student wallet is also present at the bottom of the page. 
Any Ethereum address can be entered, including the three listed above. 
Different scores and grades will be read from the blockchain through Web3.js and displayed. 
Again, the grades will be translated by the JavaScript in the browser. 
The assessor will return a ‘void’ grade because of too many tokens. 
Any account with a zero balance will return a ‘not yet assessed’ result.

A house points link is also present at the bottom of the index page. 
Harry Potter houses are used as a demonstration but can be replaced with real school houses. 
Each house is represented by a different address on the Ethereum network. 
Tokens are transferred to the different house accounts and 'read' by Web3.js in the browser. 
The teacher in charge of house points (me) is the only one with access to the private keys of the house accounts and so no transfers are possible unless authorised by this teacher, even though the tokens are standard ERC20 tokens. 


