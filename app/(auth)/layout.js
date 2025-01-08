const AuthLayout = ({ children }) => {
    return <div className="flex justify-center pt-20">{children}</div>;
  };
  
  export default AuthLayout;

  //we re doing this because we want to center the sign in and sign up pages in the auth layout. bina iske by default the sign in and sign up pages are not centered fromclerk . now if we make change to the main layout.js file then it will affect all the pages. so we are doing this to keep the sign in and sign up pages centered.


  //to change customize the forms , buttpn styles etc we need to go to the clerk dashboard and change the styles there. using the clerk dashboard we can customize the forms , button styles etc. also we can use appearacnes elements for that 
