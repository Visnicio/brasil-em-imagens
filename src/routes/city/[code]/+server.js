import {json} from '@sveltejs/kit';

import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');


export async function GET( { params } ){
    
    const code = params.code;

    try{
        const record = await pb.collection('cities').getFirstListItem('ibge_code="'+code+'"');
        
        const name = record.name;
        const ibge_code = record.ibge_code;
        const img = record.img;
        const img_url = pb.getFileUrl(record, img);
    
        const response = {
            name: name,
            ibge_code: ibge_code,
            img_url: img_url
        }

        return json(response);
    }catch(err){
        return json({error: err.response});
    }
    

}