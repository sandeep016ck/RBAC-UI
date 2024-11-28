

import React from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { visibleContent } from "../Atoms/States";

function Buttons() {
  const setVisibleContent = useSetRecoilState(visibleContent);
  const visible = useRecoilValue(visibleContent); // Only read value to apply styles

  return (
    <div className="flex h-28 ">
      <button 
        className={`w-28 h-full text-base  ${visible === 'members' ? 'border-b-4 border-red-500 font-semibold ' : ''}`} 
        onClick={() => setVisibleContent('members')}
      >
        Members
      </button>
      <button 
        className={`w-28 h-full text-base  ${visible === 'roles' ? 'border-b-4 border-red-500 font-semibold' : ''}`} 
        onClick={() => setVisibleContent('roles')}
      >
        Roles
      </button>
    </div>
  );
}

export default Buttons;
