pragma solidity ^0.5.0;
import "./biye_show.sol";
contract lu_chengjiu is biye_show{
  function chengjiuluru(address stu,string memory chengjiu)public  Is_teacher is_jiaowu_chu(tea[msg.sender].xueyuan) {
          stud[stu].chengjiu = chengjiu;
          emit chengjiu_Event(stud[stu].name,stud[stu].id,stud[stu].chengjiu);
  }
  function lurudang(address stu,uint _n) public Is_teacher is_jiaowu_chu(tea[msg.sender].xueyuan) {
          stud[stu].dangyuan=_n;
          emit show_x_x(
              stud[stu].name,
              stud[stu].id,
              stud[stu].x_x[stu].banji,
              stud[stu].xueyuan,
              stud[stu].zhuanye,
              stud[stu].x_x[stu].birth,
              stud[stu].x_x[stu].telephone,
              stud[stu].x_x[stu].j,
              stud[stu].dangyuan

              );
  }

  function cha_chengjiu(address stu)public {
          emit chengjiu_Event(stud[stu].name,stud[stu].id,stud[stu].chengjiu);
  }
  event show_siliu_Event(string name,uint id,uint siliujichengji,bool si_liu);
  function lurusiliuji(address stu,bool si,uint siliu_score)public  Is_teacher is_jiaowu_chu(tea[msg.sender].xueyuan){

      stud[stu].x_x[stu].siOrliu = si;
      if(si){
        stud[stu].x_x[stu].siliuji_chengji = siliu_score;
        emit show_siliu_Event(
            stud[stu].name,
            stud[stu].id,
            stud[stu].x_x[stu].siliuji_chengji,
            stud[stu].x_x[stu].siOrliu
            );
          }
      else {
        stud[stu].x_x[stu].liujichengji = siliu_score;
        emit show_siliu_Event(
            stud[stu].name,
            stud[stu].id,
            stud[stu].x_x[stu].liujichengji,
            stud[stu].x_x[stu].siOrliu
            );
          }
      }

  function cha_siliuji()public {
    if(stud[msg.sender].x_x[msg.sender].siOrliu){

      emit show_siliu_Event(
          stud[msg.sender].name,
          stud[msg.sender].id,
          stud[msg.sender].x_x[msg.sender].siliuji_chengji,
          stud[msg.sender].x_x[msg.sender].siOrliu
          );
        }
    else {
    
      emit show_siliu_Event(
          stud[msg.sender].name,
          stud[msg.sender].id,
          stud[msg.sender].x_x[msg.sender].liujichengji,
          stud[msg.sender].x_x[msg.sender].siOrliu
          );
        }
  }
  event  show_j(address jiao,string tea_name);

  function show_jiaowuchu() public {
      for(uint i =0;i<the_real_jiaowu[stud[msg.sender].xueyuan].j_w.length;i++){
          emit show_j(the_real_jiaowu[stud[msg.sender].xueyuan].j_w[i],tea[the_real_jiaowu[stud[msg.sender].xueyuan].j_w[i]].name);
      }
  }


}
