import axios from "axios";
import { Button } from "flowbite-react";
import { useState } from "react";
import { useEffect } from "react";

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        axios.get('/public/services.json')
            .then(res => {
                setServices(res.data)
            })
            .catch(error => {
                console.log(error);
            })
    }, [])

    return (
        <div className="w-11/12 mx-auto my-20">
            <h1 className="text-center text-4xl font-bold my-16">Our Awesome <span className="text-yellow-500">Services</span></h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 ">
                {
                    services.map(service => <div
                        key={service.id}
                        className="text-center p-10 space-y-2 shadow-md hover:shadow-lg "
                    >
                        <img className="w-10 h-10 mx-auto" src={service.img} alt="image" />
                        <h1 className="font-bold">{service.services_title}</h1>
                        <p className="text-lg font-bold text-yellow-500">${service.price}</p>
                        <p>{service.description}</p>
                    </div>)
                }

            </div>
            <div className="flex justify-center mt-10">

                <button className=" py-2 px-4 rounded-lg text-base font-bold bg-yellow-500 text-white focus:ring-4 focus:ring-blue-300 enabled:hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800">Explore more</button>
            </div>
        </div>
    );
};

export default Services;