pragma solidity ^0.5.0;
import "./luruchengji.sol";
contract biye_show is luruchengji {

  function is_pass_term(uint256 t)public returns(bool){
            if(stud[msg.sender].x_class[t].term_pass[t].haven_bx >= the_real_term[t].bx_score){
                stud[msg.sender].x_class[t].term_pass[t].pass = true;
                emit is_pass_termEvent(stud[msg.sender].name,stud[msg.sender].id,stud[msg.sender].x_class[t].term_pass[t].pass);
                return true;
             }
             else{
                  stud[msg.sender].x_class[t].term_pass[t].pass = false;
                  emit is_pass_termEvent(stud[msg.sender].name,stud[msg.sender].id,stud[msg.sender].x_class[t].term_pass[t].pass);
                  return false;
             }
        }
        function is_pass_term2(address stu,uint256 t)public returns(bool){
                  if(stud[stu].x_class[t].term_pass[t].haven_bx >= the_real_term[t].bx_score){
                      stud[stu].x_class[t].term_pass[t].pass = true;
                      emit is_pass_termEvent(stud[stu].name,stud[stu].id,stud[stu].x_class[t].term_pass[t].pass);
                      return true;
                   }
                   else{
                        stud[stu].x_class[t].term_pass[t].pass = false;
                        emit is_pass_termEvent(stud[stu].name,stud[stu].id,stud[msg.sender].x_class[t].term_pass[t].pass);
                        return false;
                   }
              }

      function is_biye()public returns(bool){
               uint256 xuan;
               bool is_true;
               xuan = stud[msg.sender].haven_xx;

               if( (is_pass_term(1)) && (is_pass_term(2)) && (is_pass_term(3))
                 && (is_pass_term(4)) && ((xuan>=all_xuanxiu_score)) )
                 { is_true = true;
                   emit biyeEvent(stud[msg.sender].name,stud[msg.sender].id,stud[msg.sender].xueyuan,stud[msg.sender].zhuanye,true);
                   return is_true;
               }
               else{
                  emit biyeEvent(stud[msg.sender].name,stud[msg.sender].id,stud[msg.sender].xueyuan,stud[msg.sender].zhuanye,false);
                   return is_true;
               }

            }

            function tea_cha_biye(address stu)internal  returns(bool){
                 uint256 xuan;
                 bool is_true;
                 xuan = stud[stu].haven_xx;

                 if( (is_pass_term2(stu,1)) && (is_pass_term2(stu,2)) && (is_pass_term2(stu,3))
                   && (is_pass_term2(stu,4)) && ((xuan>=all_xuanxiu_score)) )
                   { is_true = true;
                     //emit biyeEvent(stud[msg.sender].name,stud[msg.sender].id,stud[msg.sender].xueyuan,stud[msg.sender].zhuanye,true);
                     return is_true;
                 }
                 else{
                    //emit biyeEvent(stud[msg.sender].name,stud[msg.sender].id,stud[msg.sender].xueyuan,stud[msg.sender].zhuanye,false);
                     return is_true;
                 }

              }


}
