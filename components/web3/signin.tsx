'use client';


import React, { ReactNode, useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletButton } from '@/providers/solana-provider';
import { useWalletModal } from '@solana/wallet-adapter-react-ui';
import { getCsrfToken } from "next-auth/react"
import { SigninMessage } from "./SigninMessage";
import bs58 from "bs58";
import CodeComparison from "@/components/magicui/code-comparison";

import { useAccount, useSignMessage } from 'wagmi'
import { Hex } from 'viem';
import { Button } from "@/components/ui/button"
import { toast } from "sonner";


export function SolanaSign({onSignNatureChange}: {onSignNatureChange: (signnature: object) => void}) {
  const [signnature, setSignnature] = useState<object | null>(null);

  const wallet = useWallet();
  const walletModal = useWalletModal();
  const { publicKey } = useWallet();
  // if (!wallet.connected) {
  //   walletModal.setVisible(true);
  // }


  function DisplayPublicKey() {
    return publicKey ? (
      <Button className='flex w-full bg-purple-600'> <p>{wallet.publicKey?.toBase58()}</p></Button>
    ): (
      null
    );
  }

  function SignBtn() {
    
    const handleSignIn = async () => {
      try {
  
        const csrfToken = await getCsrfToken()
        if (!wallet.publicKey || !csrfToken || !wallet.signMessage) return;
  
        // if (signinMessage.nonce !== (await getCsrfToken())) {
        //   return null;
        // }
  
        const message = new SigninMessage({
          domain: window.location.host,
          publicKey: wallet.publicKey?.toBase58(),
          statement: `Sign this message to sign in to the app.`,
          nonce: csrfToken,
        });
  
        const data = new TextEncoder().encode(message.prepare());
        const signature = await wallet.signMessage(data);
        const serializedSignature = bs58.encode(signature);
        const sign = {
          message: JSON.stringify(message),
          redirect: false,
          signature: serializedSignature,
          publicKey: wallet.publicKey?.toBase58(),
          walletAddress: wallet.publicKey?.toBase58(),
        }
        console.log("credentials",);
        setSignnature(sign);
        onSignNatureChange(sign); // 通知父組件
        toast.success('Sign success');
      } catch (error) {
        console.error(error);
        toast.error('Error signing message:');
      }
    }; // handle error

    return publicKey ? (
      <Button onClick={handleSignIn} className='flex w-full bg-purple-600 h-full text-white'>Sign in with solana </Button>
    ): (
      null
    );
  }

  return (
    <div className='flex flex-col md:flex-row w-full h-fit justify-center items-center gap-4'>
      <WalletButton className='w-full' />
      {/* <DisplayPublicKey/> */}
      <SignBtn/>
    </div>
  );
}


export function EvmSign() {
  const [message, setMessage] = useState('Hello, sign this message!');
  const { address, isConnecting, isDisconnected } = useAccount()
  // const { signMessage } = useSignMessage()
  const [signature, setSignature] = useState<Hex | undefined>(undefined);

  const { signMessageAsync } = useSignMessage();

  const handleSignMessage = async () => {
    try {
      const signature = await signMessageAsync({ message });
      setSignature(signature); // 获取到的签名
    } catch (error) {
      console.error('Error signing message:', error);
    }
  };

  // const signature = await signMessageAsync({ message })

  if (isConnecting) return <div>Connecting…</div>
  if (isDisconnected) return <div>Disconnected</div>
  return (<div className="w-64">
    <div>{address}</div>
    <button onClick={handleSignMessage}>Sign Message</button>
    {/* <button onClick={() => signMessage({ message: 'hello world' })}>Sign message</button> */}
    {signature && (
      <div>
        <p>Message Signature:</p>
        <code>{signature}</code>
      </div>
    )}
  </div>)
}

export function EvmLab() {

  return (
    <div>
      <h1>EvmLab</h1>
      <EvmSign />
    </div>
  );
}


