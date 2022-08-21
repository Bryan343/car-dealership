import { useEffect, useState, useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const backEndData = []

const Vehicles = () => {
  const [vehicleListActive, setVehicleListActive] = useState(true)
  const [buttonText, setButtonText] = useState('Add a new vehicle')
  const [vehicleData, setVehicleData] = useState([])

  useEffect(() => {
    if (vehicleListActive) {
      setButtonText('Add a new vehicle')
    } else {
      setButtonText('Show vehicle list')
    }
  }, [vehicleListActive])

  useEffect(() => {
    setVehicleData(backEndData)
  }, [])

  return (
    <div className="w-full p-8">
      <button
        className="bg-black text-white rounded px-8 py-3"
        onClick={() => {
          setVehicleListActive(!vehicleListActive)
        }}>
        { buttonText }
      </button>
      <div className='flex flex-col'>
        { vehicleListActive ? (
          <VehicleList list={ vehicleData }/>
        ) : (
          <AddVehicleForm setVehicleListActive={ setVehicleListActive } vehicleData={ vehicleData } setVehicleData={ setVehicleData }/>
        )}
        <ToastContainer
          position="top-center"
          autoClose={2000}
        />
      </div>
    </div>
  )
}

const VehicleList = ({ list }) => {
  return (
    <div className="flex flex-col justify-beetween items-center p-20 pb-5">
      <table className="w-full">
        <thead className="bg-black text-white">
          <tr>
            <th className="p-2 border border-black">Name</th>
            <th className="p-2 border border-black">Brand</th>
            <th className="p-2 border border-black">Model</th>
          </tr>
        </thead>
        <tbody>
          {
            list.map(vehicle => {
              return (
                <tr className="even:bg-gray-100 hover:bg-gray-200">
                  <td className="p-2 border border-gray-300">{ vehicle.name }</td>
                  <td className="p-2 border border-gray-300">{ vehicle.brand }</td>
                  <td className="p-2 border border-gray-300">{ vehicle.model }</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

const AddVehicleForm = ({ setVehicleListActive, vehicleData, setVehicleData }) => {
  const form = useRef();

  const sendToBackend = (e) => {
    e.preventDefault();
    const formEl = form.current;
    const formD = new FormData(formEl);
    const newVehicle = {};
    formD.forEach((value, key) => {
      newVehicle[key] = value;
    });
    setVehicleData([...vehicleData, newVehicle]);
    toast.success("Vehicle added!");
    setVehicleListActive(true);
  }

  return (
    <div className="flex flex-col justify-beetween items-center p-20 pb-5">
      <form ref={form} action="" className="flex flex-col justify-center align-center w-4/12" onSubmit={sendToBackend}>
        <h2 className="text-center text-3xl mb-10 font-bold">Add a new vehicle</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="py-3 px-3 border-b-2 mb-2"
          required
        />
        <select
          name="brand"
          className="py-3 px-3 border-b-2 mb-2"
          defaultValue={0}
          required
        >
          <option disabled value={0}>Select a brand</option>
          <option>Toyota</option>
          <option>Ford</option>
          <option>Mazda</option>
          <option>Chevrolet</option>
        </select>
        <input
          type="number"
          name="model"
          min={1992}
          max={new Date().getFullYear()}
          placeholder="Model"
          className="py-3 px-3 border-b-2 mb-10"
          required
        />
        <button
          type="submit"
          className="bg-black text-white rounded px-8 py-3"
        >
          Add
        </button>
      </form>
    </div>
  )
}

export default Vehicles