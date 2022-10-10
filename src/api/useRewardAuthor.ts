import { ethers } from "ethers";
import { useSendTransaction } from 'wagmi'


/* STEP #6
    TODO: Develop the logic to send a transaction
    TIPS: There is a hook from the wagmi documentation that allows you to send a transaction
    Link of the documentation: https://wagmi.sh/docs/getting-started
*/
const useRewardAuthor = () => {


  const { data, isLoading, isSuccess, sendTransaction, sendTransactionAsync } = useSendTransaction()

  const rewardAuthor = async (author: string) => {
    try{
      const tx = await sendTransactionAsync({request: {to: author, value: ethers.BigNumber.from('100000000000000')}})
      console.log(tx.hash)
    }catch(e){
      throw new Error(e)
    }
  };
  return {
    data: null,
    isError: false,
    isLoading: false,
    isSuccess: false,
    isIdle: false,
    rewardAuthor,
  };
};

export default useRewardAuthor;
