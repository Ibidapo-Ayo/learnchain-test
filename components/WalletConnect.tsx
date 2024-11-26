import React, { useState } from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import Web3 from 'web3';
import { Loader2 } from 'lucide-react';

const WalletConnect = () => {

    const [isLoading, setIsLoading] = useState(false)


    const handleConnectWallet = async () => {
        try {
            setIsLoading(true)
            if (typeof window !== "undefined" && window.ethereum) {
                const web3 = new Web3(window.ethereum);

                await window.ethereum.request({ method: 'eth_requestAccounts' });

                const accounts = await web3.eth.getAccounts();
                const account = accounts[0];

                const weiBalance = await web3.eth.getBalance(account);
                const ethBalance = web3.utils.fromWei(weiBalance, 'ether');
                console.log(ethBalance);

            } else {
                alert('MetaMask is not installed. Please install MetaMask to use this feature.');
            }
        } catch (error) {
            console.error('Error connecting wallet:', error);
        } finally {
            setIsLoading(false)
        }
    }
    return (
        <div className='flex flex-col gap-4 max-w-sm mx-auto py-10'>
            <Button type='button' variant={"ghost"} className='border rounded-md border-textColor text-textColor tracking-tight hover:text-blue-700 flex h-auto py-3 hover:bg-background hover:bg-opacity-60' onClick={handleConnectWallet} disabled={isLoading}>
                {isLoading ? (
                    <Loader2 className='w-4 text-blue-500 animate-spin' />
                ) : (
                    <>
                        <Image src={"/icons/metamask.png"} alt='google' width={1000} height={1000} className='w-6' />
                        <span className='w-full font-semibold '>Continue with Metamask</span>
                    </>
                )}
            </Button>
        </div>
    )
}

export default WalletConnect