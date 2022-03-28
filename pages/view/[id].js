import Axios from "axios";
import { useRouter } from "next/router";
import { useState, useEffect } from 'react';
import Item from '../../src/component/Item';

const Post = () => {
    const router = useRouter();
    const { id } = router.query;

    const [ item, setItem ] = useState({});
    const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;

    const getData = () => {
        Axios.get(API_URL).then((res) => {
            setItem(res.data);
        });
    }

    useEffect(() => {
        if(id && id > 0) {
            getData();
        }
    }, []);

    return (
        <Item item={item}/>
    );
}

export default Post;