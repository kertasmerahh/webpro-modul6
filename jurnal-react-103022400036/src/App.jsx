import { useState } from 'react'
import KartuMenu from './component/KartuMenu'
import Panel from './component/Panel';

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
      <Panel>
        <KartuMenu  nama = "Nasi Ayam Geprek" kategori harga = {10000 + (N * 100)}/>
        <KartuMenu  nama = "Es Teh Lemon" kategori = "minuman" harga = "6.700"/>
        <KartuMenu  nama = "Es Teh Manis" kategori = "minuman" harga = "3.000"/>
      </Panel>
    </>
  )
}

export default App
