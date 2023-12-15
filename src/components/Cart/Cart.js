import Footer from '../Home/Footer/Footer';
import CartPage from './CartPage/CartPage';
import Header from './Header/Header';

function Cart() {
  return (
    <div>
      <div className="relative">
        <div className="absolute z-10">
          <div className="inset-0 flex justify-center items-center p-48 -mt-8">
            <Header />
          </div>
        </div>
        <div className="flex min-h-screen flex-col justify-between pt-24">
          <div className="inset-0 flex px-48">
            <CartPage />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Cart;
