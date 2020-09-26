
const getAge = (d1) => {
    var d2 = new Date();
    var diff = d2.getTime() - d1.getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
}

export default [
    {
      label : 'Name',
      data  : 'Shivank Mathur'
    },
    {
      label : 'Email',
      data  : 'shivumat@gmail.com'
    },
    {
      label : 'Phone',
      data  : '+91-810-798-9650'
    },
    {
      label : 'Date Of Birth',
      data  : 'July 19 1995'
    },
    {
      label : 'Age',
      data  : getAge(new Date('07/19/1995'))
    },
    {
      label : 'Nationality',
      data  : 'Indian'
    },
  ]