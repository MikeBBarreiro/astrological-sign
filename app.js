//ask user date of birth 08/15/1993
//output age
//output atsro sign

var prompt = require('sync-prompt').prompt;

var dob = prompt('DOB (mm/dd/yyyy):');

dob = new Date(dob);
var today = new Date();

var birthMonth = dob.getMonth() + 1;
var birthDay = dob.getDate();
var birthYear = dob.getFullYear();

var bd = birthMonth + '/' + birthDay + '/' + today.getFullYear();
bd = new Date(bd);

var age = today.getFullYear() - dob.getFullYear();

if(today.getTime() < bd.getTime()){
age--;
}

var sign;

switch(birthMonth){
  case 1:
    if(birthDay < 20){
            sign = 'Capricorn';
                }else{
                        sign = 'Aquarius';
                            }
        break;
          case 2:
            if(birthDay < 19){
                    sign = 'Aquarius';
                        }else{
                                sign = 'Pisces';
                                    }
                break;
                  case 3:
                    if(birthDay < 21){
                            sign = 'Pisces';
                                }else{
                                        sign = 'Aries';
                                            }
                        break;
                          case 4:
                            if(birthDay < 20){
                                    sign = 'Aries';
                                        }else{
                                                sign = 'Taurus';
                                                    }
                                break;
                                  case 5:
                                    if(birthDay < 21){
                                            sign = 'Taurus';
                                                }else{
                                                        sign = 'Gemini';
                                                            }
                                        break;
                                          case 6:
                                            if(birthDay < 21){
                                                    sign = 'Gemini';
                                                        }else{
                                                                sign = 'Cancer';
                                                                    }
                                                break;
                                                  case 7:
                                                    if(birthDay < 23){
                                                            sign = 'Cancer';
                                                                }else{
                                                                        sign = 'Leo';
                                                                            }
                                                        break;
                                                          case 8:
                                                            if(birthDay < 23){
                                                                    sign = 'Leo';
                                                                        }else{
                                                                                sign = 'Virgo';
                                                                                    }
                                                                break;
                                                                  case 9:
                                                                    if(birthDay < 23){
                                                                            sign = 'Virgo';
                                                                                }else{
                                                                                        sign = 'Libra';
                                                                                            }
                                                                        break;
                                                                          case 10:
                                                                            if(birthDay < 23){
                                                                                    sign = 'Libra';
                                                                                        }else{
                                                                                                sign = 'Scorpio';
                                                                                                    }
                                                                                break;
                                                                                  case 11:
                                                                                    if(birthDay < 22){
                                                                                            sign = 'Scorpio';
                                                                                                }else{
                                                                                                        sign = 'Sagittarius';
                                                                                                            }
                                                                                        break;
                                                                                          case 12:
                                                                                            if(birthDay < 22){
                                                                                                    sign = 'Sagittarius';
                                                                                                        }else{
                                                                                                                sign = 'Capricorn';
                                                                                                                    }
}

console.log('You are ' + age + ' years old. Your sign is ' + sign + '.');










