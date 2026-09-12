import { useForm } from "react-hook-form";
export default function FormDemo({ changeItems }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "onChange" });
  const onRegistration = (data) => {
    console.log(data);
  };
  const registerOptions = {
    name: {
      required: "Name cannot be blank",
    },
    email:{
        required:"Email cannot be blank"
    },
    password:{
        required:"Password cannot be blank",
        minLength:{
            value:10,
            message:"Password must be atleast 10 characters"
        }
    },
    quantity:{
        required:"Quantity is required",
        min:{
            value:0,
            message:"Quantity must be greater than 0"
        },
        max:{
            value:10,
            message:"Quantity must be less than 10"
        }
    }
  };
  return (
    <form onSubmit={handleSubmit(onRegistration)}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          {...register("name", registerOptions.name)}
        />
        <small>{errors.name && errors.name.message}</small>
      </div>
        <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          {...register("email", registerOptions.email)}
        />
        <small>{errors.email && errors.email.message}</small>
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          {...register("password", registerOptions.password)}
        />
        <small>{errors.password && errors.password.message}</small>
      </div>
      <div>
        <label htmlFor="quantity">Quantity</label>
        <input
          type="number"
          name="quantity"
          {...register("quantity", registerOptions.quantity)}
          
        />
        <small>{errors.quantity && errors.quantity.message}</small>
      </div>
      <button>Submit</button>
    </form>
  );
}
