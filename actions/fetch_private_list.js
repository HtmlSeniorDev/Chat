import {address} from "../config_connect";

async function request_GET_PRIVATE_LIST(nic) {

    const url = address + `/personalrooms/`;
    try {
        const data = await fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Content-Encoding': 'utf-8',
            },


            body: JSON.stringify({
                nic_id: nic,
            }),

                                 });

        let responseJsonData = await data.json();
        console.log(responseJsonData);

        return responseJsonData.data;


    } catch (e) {
        console.log(e)
    }
}

export default request_GET_PRIVATE_LIST
