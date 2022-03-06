import Layout from "../../components/Layout";
import { useState } from "react";
import MuiButton from "../../components/MuiButton";
import styles from '../../styles/table.module.css'

export default function CustomersId(){
    const [customer, setCustomer] = useState({
        id:null,
        first_name: '',
        last_name: '',
        address:{
            street: '',
            city: '',
            state: '',
            zip: ''
        },
    })

    const [idCustomer, setIdCustomer] = useState(0)
    // getCustomer(1)
   
    function getNextCustomer(e){
        setIdCustomer(++idCustomer)
        getCustomer(idCustomer)
    }
    function getPreviousCustomer(e){
        setIdCustomer(--idCustomer)
        getCustomer(idCustomer)
    }

    async function getCustomer(id){
        const url = `http://localhost:3000/api/customers?id=${id}`
        const resp =  await fetch(url)
        if(resp.status === 200){
            const data  = await resp.json()
            setCustomer(data)   
        }else{
            getCustomer(1)
            setIdCustomer(1)
        }                    
    }
    
        return(
        <Layout title="Costumers">
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{customer.id}</td>
                        <td>{customer.first_name}</td>
                        <td>{customer.last_name}</td>
                        <td>{`
                            ${customer.address.street},
                            ${customer.address.zip},
                            ${customer.address.city}-
                            ${customer.address.state}
                        `}</td>
                    </tr>
                </tbody>
            </table>
            <div className={styles.btn_group}>
            <MuiButton 
                icon="angle-right" 
                title="Next"
                onClick={getNextCustomer}
                sx={{
                    marginTop: '20px',
                }}
            />
            <MuiButton 
                icon="angle-left" 
                title="Previous"
                onClick={getPreviousCustomer}
                sx={{
                    marginTop: '20px',
                }}
            />
            </div>
        </Layout>
    );
}