import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const nama = "Yosua";
  const N = 36;
  const jam = 9;
  const style_judul = {
    fontSize: '20px', 
    color: 'black'
  }

  return (
    <>
      <h1 className='judul ' style={style_judul}>Kantin{nama} </h1>
      <p>"Saldo awal kartu kantin: Rp {N * 1000} "</p>
      <p>{jam < 12 ? "Selamat pagi" : "Selamat siang"}</p>
      <button disabled> bayar</button>
    </>
  )
}

export default App
