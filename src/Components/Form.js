import { UseForm, useForm } from "react-hook-form";

function Form({formsub}) {
  
    const {
        register,
        handleSubmit,
        formState:{errors},
        reset,
    }=useForm();
    const onSub=(data)=>{
      data.id =Date.now();
      data.fav=false;
       formsub(data)
       // console.log(data);
        reset();
        


    }

  return (
    <div className="col-sm-4 shadow rounded g-5">
      <h1 className="text-center pt-3 text-secondary h2">Add Contact</h1>
      <form onSubmit={handleSubmit(onSub)}>
        <div className="form-group">
          <label className="col-form-label">Name:</label>
          <input
            type="text"
            className="form-control"{...register("name",{required: "Name is Required",
           
          


            })}
            
          />
          {errors.name &&(
            <small className="text-danger">{errors.name.message}</small>
            )}
        </div>
        <div className="form-group">
          <label className="col-form-label">Email:</label>
          <input
            type="text"
            className="form-control"{...register("email",{required:"Email is Required",
            pattern:{value:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,message:"invalid email id"

            }})}
            
          />
          {errors.email&&(
          
            <small className="text-danger">{errors.email.message}</small>
            )}
        </div>
        <div className="form-group">
          <label className="col-form-label">Phone:</label>
          <input
            type="text"
            className="form-control"{...register("phone",{required:"Phoen Number is Required",pattern:{
              value:/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/,message:"invalid phone number"
            }})}
           
           
          />{errors.phone&&(
         
            <small className="text-danger">{errors.phone.message}</small>
            )}
        </div>
        <input
          type="submit"
          className="btn btn-primary my-3"
          value="Add Contact"
        />
      </form>
    </div>
  );
}

export default Form