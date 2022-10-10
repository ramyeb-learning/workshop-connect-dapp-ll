import artifacts from "../utils/contract.json";
import { domain } from "../utils/EIP712";
import { useEffect } from 'react';
import { useContractRead } from "wagmi";

const useFetchMessages = () => {
  const { data, isError, isLoading, refetch } = useContractRead({
    addressOrName: domain.verifyingContract,
    contractInterface: artifacts.abi,
    functionName: 'getLast10Messages',
  })

  useEffect(() => {
    refetch();
  }, []);

  return { data, isError, isLoading };

};

export default useFetchMessages;
