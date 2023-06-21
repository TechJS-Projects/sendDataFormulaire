import '../CSS/style.css';
import '../CSS/inscription.css';
// import Decoration from '../Composants/decoration';
import Menu from '../Composants/Menu'
import {Link} from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from 'axios';

export default function Inscription (){
    return(
        <div className="super-container">
            <SectionContainer/>    
        </div>
    )
}

function SectionContainer(){
    return(
        <section className="container">
            <Menu />
            <div className='container-formulaire'>
                {/* <Decoration /> */}
                <div className="div-formulaire">
                    <FormInscription />
                </div>
            </div>
        </section>
    )
}


function FormInscription(){
    const {handleSubmit, register}= useForm();
    //HandleSubmit: fonction qui récupère les données lors du submit
    //Register: fonction qui permet de définir les clés de l'objet qui contient les données

    return (  
            <form className="formulaire" onSubmit={handleSubmit(onSubmit)}> 
                
                <input type="text" name="t_nom" id="nom" className="nom" placeholder="Nom" {...register("nom")}/> 
                <input type="text" name="t_prenom" id="prenom" className="prenom"  placeholder="Prénom" {...register("prenom")}/>
                <input type="date" name="d_annif" id="annif" className="annif" placeholder="Né(e) le :" {...register("dateNaiss")}/>
                <input type="text" name="t_lieu-naissance" id="lieu-naissance" className="lieu-naissance" placeholder="à" {...register("lieuNaiss")}/>
                <input type="text" name="t-profession" id="profession" className="profession" placeholder="Profession" {...register("profession")}/>
                <input type="text" name="t_domicile" id="domicile" className="domicile" placeholder="Domicile" {...register("domicile")}/>
                <input type="text" name="t_arrondissement" id="arrondissement" className="arrondissement" placeholder="Arrondissement" {...register("arrondissement")}/>
                <input type="number" name="n_Num-CIN" id="Num-CIN" className="Num-CIN" placeholder="N° CIN" {...register("numCin")}/>
                <input type="text" name="t_fait" id="fait" className="fait" placeholder="Fait à" {...register("lieuDeliv")}/>
                <input type="date" name="t_le" id="le" className="le" placeholder="Le  " {...register("dateDeliv")}/>
                <input type="text" name="t_pere" id="pere" className="pere" placeholder="Père" {...register("nomPere")}/>
                <input type="text" name="t_mere" id="mere" className="mere" placeholder="Mère"{...register("nomMere")}/>

                <div className="btn-list">
                    <Link to="/"><button className="btn-suivant">Retour</button></Link>
                    <input type="submit" value="Suivant" className="btn-suivant"/>
                </div>
            </form>
    )
}

//Cette fonction récupère les données de la formulaire 
export function onSubmit(data){
    console.log(data);
    try{
        console.log("Mande tsara")
        axios.post('http://localhost:8000/users',data)
        .then(res=>{
            console.log("Enregistrement avec succès");
        }).catch(err=> console.log(err));
    }
    catch(err){
        console.log("Tsia ---- erreur be ",err)
    }
    // return data;
}