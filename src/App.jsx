import { useRecoilValue } from "recoil";
import { Members } from './components/Members';
import { Roles } from './components/Roles';
import { visibleContent } from './Atoms/States';
import Buttons from './components/Buttons';

function App() {
  const content = useRecoilValue(visibleContent); // Only subscribe to the state for rendering the main content

  return (
    <div className="h-full flex flex-col ">
      <div className="h-28 border-b-2 font-roboto pl-2 flex flex-col justify-between ">
        <div className="text-3xl font-extrabold font-sans pl-3 p-3">
          Admin Panel
        </div>
        {/* seperate button logic to avoid whole component rendering */}
        <Buttons /> 
      </div>
      <div className="p-5 border">
        <div className="p-6">
          {content === 'members' ? <Members /> : <Roles />}
        </div>
      </div>
    </div>
  );
}

export default App;
