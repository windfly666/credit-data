pragma solidity ^0.5.0;
import "./xuan.sol";
contract luruchengji is xuan {


  function luru_class_score(uint256 _stu_id,uint256 _class_id,uint256 _score,string memory _pingyu)public Is_teacher{

                       for(uint256 i = 0;i<stu_address.length;i++){
                             if(stud[stu_address[i]].id == _stu_id){//先找到学生
                                 if(stud[stu_address[i]].x_class[m].xq_class[_class_id].tongguo==false){
                                            if(stud[stu_address[i]].x_class[m].xq_class[_class_id].id == _class_id){
                                           if(_score >= 60){
                                                       if(stud[stu_address[i]].x_class[m].xq_class[_class_id].bxOrxx == true)
                                                       {
                                                         stud[stu_address[i]].x_class[xuenian_class[_class_id].xuenian].term_pass[xuenian_class[_class_id].xuenian].haven_bx +=
                                                         stud[stu_address[i]].x_class[xuenian_class[_class_id].xuenian].xq_class[_class_id].xuefen;
                                                         stud[stu_address[i]].haven_bx += stud[stu_address[i]].x_class[xuenian_class[_class_id].xuenian].xq_class[_class_id].xuefen;
                                                         stud[stu_address[i]].x_class[xuenian_class[_class_id].xuenian].xq_class[_class_id].score = _score;
                                                         stud[stu_address[i]].x_class[xuenian_class[_class_id].xuenian].xq_class[_class_id].pingyu = _pingyu;
                                                         stud[stu_address[i]].x_class[xuenian_class[_class_id].xuenian].xq_class[_class_id].tongguo=true;

                                                         }
                                                       if(stud[stu_address[i]].x_class[m].xq_class[_class_id].bxOrxx == false){
                                                         stud[stu_address[i]].haven_xx +=
                                                         stud[stu_address[i]].x_class[m].xq_class[_class_id].xuefen;
                                                         stud[stu_address[i]].x_class[m].xq_class[_class_id].score = _score;
                                                         stud[stu_address[i]].x_class[m].xq_class[_class_id].pingyu = _pingyu;
                                                         stud[stu_address[i]].x_class[m].xq_class[_class_id].tongguo=true;

                                                     }

                                             }
                                          else{
                                                       stud[stu_address[i]].x_class[m].xq_class[_class_id].score = _score;
                                                       stud[stu_address[i]].x_class[m].xq_class[_class_id].pingyu = _pingyu;
                                                       stud[stu_address[i]].x_class[m].xq_class[_class_id].tongguo=false;
                                                       stud[stu_address[i]].x_class[xuenian_class[_class_id].xuenian].xq_class[_class_id].tongguo=false;

                                                       }
                                                    }

                                          }
                                      }
                               emit luru_class_scoreEvent(_stu_id,_class_id,_score,_pingyu);

                            }

                  }

    function show_stu_xuefen()public{
                emit stu_xuefen_event(
                    stud[msg.sender].x_class[m].term_pass[m].haven_bx,
                    stud[msg.sender].x_class[m].term_pass[m].haven_xx);

              }

              function tea_show_stu_score(uint256 _class_id)public Is_teacher{
                      for(uint256 j =0;j<stu_address.length;j++){
                       //for(uint256 i = 0;i<all_class_id.length;i++){
                          if( keccak256(abi.encodePacked(tea[msg.sender].name)) ==
                          keccak256(abi.encodePacked(the_real_term[m].xq_class[_class_id].tea_name))){
                              if(stud[stu_address[j]].x_class[m].xq_class[_class_id].score!=0)
                              emit tea_cha_scoreEvent(
                                      stud[stu_address[j]].name,
                                      stud[stu_address[j]].x_class[m].xq_class[_class_id].name,
                                      stud[stu_address[j]].x_class[m].xq_class[_class_id].id,
                                      stud[stu_address[j]].x_class[m].xq_class[_class_id].xuefen,
                                      stud[stu_address[j]].x_class[m].xq_class[_class_id].tea_name,
                                      stud[stu_address[j]].x_class[m].xq_class[_class_id].bxOrxx,
                                      stud[stu_address[j]].x_class[m].xq_class[_class_id].score
                                  );
                          }
                      //  }
                      }
                  }

}
