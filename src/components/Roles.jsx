import { useRecoilState } from "recoil"
import {roles} from '../Atoms/States'


export const Roles = () => {
    const [rolesL,setRoles] = useRecoilState(roles)

    return (
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">Roles</h2>
          <div className="bg-gray-100 p-4 rounded-md shadow-md">
            {rolesL.map((role, index) => (
              <div
                key={index}
                className="p-2 text-black bg-white border-b last:border-none"
              >
                {role}
              </div>
            ))}
          </div>
         
        </div>
      );
}