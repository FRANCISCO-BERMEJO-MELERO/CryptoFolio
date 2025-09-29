import './App.css'
import { ConnectButton } from '@rainbow-me/rainbowkit'

import { useBalance, useAccount } from 'wagmi'
function App() {
  const { address } = useAccount()
  const data = useBalance({ address })
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
        <h1 className="text-3xl font-bold mb-6">Conecta tu wallet con el botón</h1>
        <div className="mb-8">
          <ConnectButton />
        </div>
        {
          data.isSuccess ? (
        <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-lg p-6">
          <table className="w-full table-auto border-collapse">
            <thead>
          <tr>
            <th className="px-4 py-2 border-b border-gray-700 text-left">Balance</th>
            <th className="px-4 py-2 border-b border-gray-700 text-left">Symbol</th>
            <th className="px-4 py-2 border-b border-gray-700 text-left">Decimals</th>
          </tr>
            </thead>
            <tbody>
          <tr>
            <td className="px-4 py-2 border-b border-gray-700">{data.data.formatted}</td>
            <td className="px-4 py-2 border-b border-gray-700">{data.data.symbol}</td>
            <td className="px-4 py-2 border-b border-gray-700">{data.data.decimals}</td>
          </tr>
            </tbody>
          </table>
        </div>
          ) : (
        <p className="mt-6 text-gray-400">Connect your wallet to see the balance</p>
          )
        }
      </div>
    )
}

export default App

