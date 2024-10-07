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


export function SolanaLab() {
  const wallet = useWallet();
  const { publicKey } = useWallet();


  return publicKey ? (
    <div className="w-64">
      <h1>Web3Lab</h1>
      <p>{wallet.publicKey?.toBase58()}</p>
      <SolanaSign />
    </div>
  ) : (
    <div className="w-64">
      <div className="max-w-4xl mx-auto">
        <div className="hero-content text-center">
          <WalletButton />
        </div>
      </div>
    </div>
  );
}

export function SolanaSign() {
  const [signnature, setSignnature] = useState<object | null>(null);
  const wallet = useWallet();
  const walletModal = useWalletModal();
  const { publicKey } = useWallet();
  if (!wallet.connected) {
    walletModal.setVisible(true);
  }

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
      }
      console.log("credentials",);
      setSignnature(sign);
    } catch (error) {
      console.error(error);
    }
  }; // handle error

  return signnature == null ? (
    <div>
      <button onClick={handleSignIn}>Sign</button>
    </div>
  ) : (
    <div className='w-full' >
      <h1>signnature</h1>
      {/* <pre>{JSON.stringify(signnature, null, 2)}</pre> */}
      <CodeComparison
        beforeCode={JSON.stringify(signnature, null, 2)}
        afterCode={JSON.stringify(signnature, null, 2)}
        language="typescript"
        filename="middleware.ts"
        lightTheme="github-light"
        darkTheme="github-dark"
      />
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



export function Web3Lab() {
  return (
    <div className='flex flex-row'>
      <h1>Web3Lab</h1>
      <SolanaLab />
      <EvmLab />
    </div>
  );
}

