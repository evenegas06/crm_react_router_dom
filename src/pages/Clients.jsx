import { useLoaderData } from "react-router-dom";

const Clients = () => {
    const data = useLoaderData();

    console.log(data);

    return (
        <div>Clients</div>
    );
};
export default Clients;