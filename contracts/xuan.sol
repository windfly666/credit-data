pragma solidity ^0.5.0;
import "./cha.sol";
contract xuan is cha {
  function stu_xuan_class(uint256 _id)public {

                stud[msg.sender].x_class[m].xq_class[_id].name = the_real_term[m].xq_class[_id].name;
                stud[msg.sender].x_class[m].xq_class[_id].id = the_real_term[m].xq_class[_id].id;
                stud[msg.sender].x_class[m].xq_class[_id].xuefen = the_real_term[m].xq_class[_id].xuefen;
                stud[msg.sender].x_class[m].xq_class[_id].bxOrxx = the_real_term[m].xq_class[_id].bxOrxx;
                stud[msg.sender].x_class[m].xq_class[_id].tea_name = the_real_term[m].xq_class[_id].tea_name;
                stud[msg.sender].x_class[m].xq_class[_id].score = 0;
                stud[msg.sender].x_class[m].xq_class[_id].pingyu ="";
                emit stu_xuan_class_event(the_real_term[m].xq_class[_id].name);

          }

          function chakan_all_xuan()public{
            for(uint256 i =0;i<class_id.length;i++){
             emit chakan_all_xuan_event(
                  the_real_term[m].xq_class[class_id[i]].name,
                  the_real_term[m].xq_class[class_id[i]].id,
                  the_real_term[m].xq_class[class_id[i]].xuefen,
                  the_real_term[m].xq_class[class_id[i]].tea_name
                      );
                    }
                  }
                  function stu_chongxiu(uint256 _id)public{
                    for(uint256 i =0;i<all_class_id.length;i++){
                            if(all_class_id[i] == _id){
                          stud[msg.sender].x_class[m].xq_class[_id].name = the_real_term[m].xq_class[all_class_id[i]].name;
                          stud[msg.sender].x_class[m].xq_class[_id].id = the_real_term[m].xq_class[all_class_id[i]].id;
                          stud[msg.sender].x_class[m].xq_class[_id].xuefen = the_real_term[m].xq_class[all_class_id[i]].xuefen;
                          stud[msg.sender].x_class[m].xq_class[_id].bxOrxx = the_real_term[m].xq_class[all_class_id[i]].bxOrxx;
                          stud[msg.sender].x_class[m].xq_class[_id].tea_name = the_real_term[m].xq_class[all_class_id[i]].tea_name;
                          stud[msg.sender].x_class[m].xq_class[_id].score = 0;
                          stud[msg.sender].x_class[m].xq_class[_id].pingyu ="";
                          emit luru_bixiu_class_event(stud[msg.sender].x_class[m].xq_class[_id].name,
                            _id,stud[msg.sender].x_class[m].xq_class[_id].xuefen);
                        }
                      }
                    }
                    event cha_chongxiu_Event(string name,uint id,string tea_name,uint xuefen,bool bi_xuan);

                    function cha_chongxiu()public{
                      for(uint j =1;j<=m;j++){
                        for(uint256 i =0;i<all_class_id.length;i++){
                          emit cha_chongxiu_Event(
                            the_real_term[j].xq_class[all_class_id[i]].name,
                            the_real_term[j].xq_class[all_class_id[i]].id,
                            the_real_term[j].xq_class[all_class_id[i]].tea_name,
                            the_real_term[j].xq_class[all_class_id[i]].xuefen,
                            the_real_term[j].xq_class[all_class_id[i]].bxOrxx
                      );
                    }
                  }
                  }
}
