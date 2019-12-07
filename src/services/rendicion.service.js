import { Subject } from 'rxjs';
import { HOST } from '../shared/var.constant';
import {Rendicion} from '../model/rendicion';
import React,{Component} from "react";
import {Alert} from 'react-native';

class RendicionService{
    rendicionLista=new Subject();


    registrar=(data)=>{
        var url = `${HOST}/Rendiciones`;
        return fetch(url, {
            method: 'POST',
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json',

            },
            body:JSON.stringify(data),

        }).catch((error)=>{
            console.error(error);
        });
    };

    listar=(id) =>{
        var url = `${HOST}/Rendiciones/`+id;
        return fetch(url).then(res=>res.json());
    };
    listarId= (params) =>{
        const url =`${HOST}/Rendiciones/`+params.id;
        return fetch(url).then(res=>res.json());
    };
}export default new RendicionService();