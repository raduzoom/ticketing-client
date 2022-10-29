let STRIPE_KEY = '';
try{

  STRIPE_KEY = process.env.STRIPE_KEY_PUBLIC;
}catch(err){
  console.log(err);
}
export {STRIPE_KEY};