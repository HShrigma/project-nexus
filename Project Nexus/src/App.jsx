import Header from './components/header/Header'
import ProductCounter from './components/products/ProductCounter';

function App() {
  return (
    <>
          <Header />
          <ProductCounter/>
          <h1 className='ml-20 bg-red-200 text-red-800'> Hello World</h1>
    </>
  )
}

export default App;