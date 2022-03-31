import { useContext } from 'react';
import { MusicContext } from '../../store/context';
import SmallSticky from './SmallSticky';
import FullSticky from './FullSticky';

function Sticky() {
  const ctx = useContext(MusicContext);
  const toggle = () => {
    ctx.toggleModal();
  };

  const fullScreen = 'absolute h-full border-b border-yellow-400 min-h-screen';
  return (
    <div
      className={`w-full ${
        ctx.showModal ? fullScreen : 'sticky bottom-0 h-[85px]  border-t border-yellow-400'
      } bg-white`}
    >
      {ctx.showModal ? <FullSticky onToggle={toggle} context={ctx} /> : <SmallSticky onToggle={toggle} context={ctx} />}
    </div>
  );
}

export default Sticky;
