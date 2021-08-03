pragma solidity ^0.5.0;
import "./myEvent.sol";
contract all is myEvent {

  struct Student {
    //address stu;
    uint haven_bx;
    uint haven_xx;
    uint haven_total_score;
    bool pass;
    string name;
    uint id;
    string xueyuan;
    string zhuanye;
    mapping(address=>Userinfo) sui;
    mapping(uint => term) x_class;
    mapping(address => s_xiangxi) x_x;
    uint dangyuan;
    string chengjiu;
    mapping (address => chachengji) stu_cha;
  }
  struct chachengji{
    bool can;
    address[] n;
    bool chengjiu_can;
  }


  struct jiaowuchu {
      address[] j_c;
  }
  mapping(string => jiaowuchu) z_jiaowuchu;

  struct s_xiangxi{

      string banji;
      string birth;
      uint telephone;
      uint j;
      uint siliuji_chengji;
      bool siOrliu;
      uint liujichengji;

  }

  struct Teacher{

    //string zhuanye;
    //address te;
    string name;
    uint id;
    string xueyuan;
    string zhuanye;
    mapping(address=>Userinfo) tui;
    bool jiaowuchu;
  }
  struct Jiaowuchu{
      address[] j_w;
  }
  mapping (string=>Jiaowuchu) the_real_jiaowu;

  event luru_xiangxi_event(string banji,string birth,uint telephone,uint nianji);
  function luruxiangxixinxi(string memory _banji , string memory _birth,uint _telephone,uint _j) public {
      stud[msg.sender].x_x[msg.sender]=s_xiangxi(_banji,_birth,_telephone,_j,0,false,0);
      emit luru_xiangxi_event(
            stud[msg.sender].x_x[msg.sender].banji,
            stud[msg.sender].x_x[msg.sender].birth,
            stud[msg.sender].x_x[msg.sender].telephone,
            stud[msg.sender].x_x[msg.sender].j
      );
  }

  event show_x_x(string name,uint id,string banji,string xueyuan,string zhuanye,string birth,uint telephone,uint j,uint dayuan);
  function chakan_xiangxi_xinxi() public {
      emit show_x_x(
          stud[msg.sender].name,
          stud[msg.sender].id,
          stud[msg.sender].x_x[msg.sender].banji,
          stud[msg.sender].xueyuan,
          stud[msg.sender].zhuanye,
          stud[msg.sender].x_x[msg.sender].birth,
          stud[msg.sender].x_x[msg.sender].telephone,
          stud[msg.sender].x_x[msg.sender].j,
          stud[msg.sender].dangyuan

          );
  }
  struct Userinfo {
      string name;   //用户名
      string password;  //用户密码
      bool post;  //用户权限
      bool hasReg; //是否注册
      bool hasLog; //是否登录
      bool is_qiye;
  }
 struct qiye{
   string name;   //用户名
   string dizhi;  //用户密码
   mapping (address =>Userinfo) qiye_info;
   string jianjie;
 }
 address[] qiye_dizhi;
 mapping (address => qiye) the_real_qiye;



  struct term {
          uint bx_score;
          uint xx_score;
          uint total_score;
          uint n;
          mapping(uint => term_finish) term_pass;
          mapping(uint => class) xq_class; //课程编号

      }

  struct term_finish{
       uint haven_bx;
       uint haven_xx;
       uint haven_total_score;
       bool pass;
   }

   function shi_laoshi()internal view returns(bool){
          for(uint i = 0;i<tea_address.length;i++){
                if(tea_address[i]==msg.sender){
                    return true;
                         }
          }
          return false;
      }
      function shi_jiaowuchu(string memory _jiaowuchu)internal view returns(bool){
             for(uint i=0;i<the_real_jiaowu[_jiaowuchu].j_w.length;i++){
                            if(the_real_jiaowu[_jiaowuchu].j_w[i]==msg.sender){
                               return true;
                            }
             }
             return false;
         }
     modifier Is_teacher() {
                     require(shi_laoshi()==true,"请使用教师身份");
                             _;
           }

     modifier is_jiaowu_chu(string memory _jiaowuchu) {
                   require(shi_jiaowuchu(_jiaowuchu)==true,"请使用教务处身份");
               _;
           }

    struct class{
        string name;
        uint id;
        uint score;
        uint xuefen;
        string tea_name;//任课教师
        bool bxOrxx;
        bool tongguo;
        uint xuenian;
        string pingyu;
    }
    uint[] public class1;
    uint[] public class2;
    uint[] public class3;
    uint[] public class4;
    uint public all_xuanxiu_score;
    uint[] class_id;
    uint[] all_class_id;
    uint public m;
    mapping (uint => class) xuenian_class;
    mapping (address => Teacher) tea;
    mapping (address => Student) stud;
    mapping (uint => term) the_real_term;
    address[] public stu_address;//地址类型的数组，用于存储已经注册学生用户地址
    address[] public tea_address;



       function _register(string memory newname  ,string memory newpassword  , bool  yourpost ) public {
            require((stud[msg.sender].sui[msg.sender].hasReg == false)&&(tea[msg.sender].tui[msg.sender].hasReg == false),"一个账户地址只能注册一次 ");
            if(yourpost==false){
                stud[msg.sender].sui[msg.sender]=Userinfo(newname,newpassword,yourpost,true,false,false);
                stu_address.push(msg.sender);
                emit register(msg.sender);
            }
            if(yourpost==true){
              tea[msg.sender].tui[msg.sender]=Userinfo(newname,newpassword,yourpost,true,false,false);
                tea_address.push(msg.sender);
                emit register(msg.sender);
            }
         }
       function _login(string memory yourname  ,string memory yourpassword )   public  {
         require((stud[msg.sender].sui[msg.sender].hasReg == true)||(tea[msg.sender].tui[msg.sender].hasReg ==true),"该账户地址未注册 ");
         require( ((keccak256(abi.encodePacked(stud[msg.sender].sui[msg.sender].name))== keccak256( abi.encodePacked(yourname )))
                  &&(keccak256(abi.encodePacked(stud[msg.sender].sui[msg.sender].password))== keccak256( abi.encodePacked( yourpassword)))
                  ||((keccak256(abi.encodePacked(tea[msg.sender].tui[msg.sender].name))== keccak256( abi.encodePacked(yourname )))
                  &&(keccak256( abi.encodePacked(tea[msg.sender].tui[msg.sender].password))== keccak256( abi.encodePacked( yourpassword))))
                  )
              ,"账号或密码错误"  );
         if(stud[msg.sender].sui[msg.sender].post==false&&(stud[msg.sender].sui[msg.sender].hasReg == true)){
              stud[msg.sender].sui[msg.sender].hasLog = true;
              emit login(stud[msg.sender].sui[msg.sender].name , stud[msg.sender].sui[msg.sender].post);
         }else if(tea[msg.sender].tui[msg.sender].post==true&&(tea[msg.sender].tui[msg.sender].hasReg == true)){
              tea[msg.sender].tui[msg.sender].hasLog = true;
              emit login(tea[msg.sender].tui[msg.sender].name , tea[msg.sender].tui[msg.sender].post);
         }
          }


          function luruStu(string memory _name,uint _id,string memory _xueyuan,string memory _zhuanye)public {//*
                require(stud[msg.sender].sui[msg.sender].hasLog == true,"请先登录");
                require(stud[msg.sender].sui[msg.sender].post == false,"请使用学生账户");
                stud[msg.sender] = Student(0,0,0,false,_name,_id,_xueyuan,_zhuanye,0," ");
                emit luru(stud[msg.sender].name,stud[msg.sender].id,stud[msg.sender].xueyuan,stud[msg.sender].zhuanye);
            }

          function luruTea(string memory _name,uint _id,string memory _xueyuan,string memory _zhuanye,bool _jiaowuchu)public {//*
             require(tea[msg.sender].tui[msg.sender].post == true,"请使用教师账户");
               tea[msg.sender] = Teacher(_name,_id,_xueyuan,_zhuanye,_jiaowuchu);
               if(_jiaowuchu==true){
                   the_real_jiaowu[_xueyuan].j_w.push(msg.sender);
               }
             emit luru(tea[msg.sender].name,tea[msg.sender].id,tea[msg.sender].xueyuan,tea[msg.sender].zhuanye);
         }
          event show_tea(string name,uint id,bool userpost,string xueyuan,string zhuanye);
          function _showTea()public{
                 emit show_tea(tea[msg.sender].name,tea[msg.sender].id,tea[msg.sender].tui[msg.sender].post,
                   tea[msg.sender].xueyuan,
                   tea[msg.sender].zhuanye);
            }


        function luruterm(uint _bx_score,uint _n) public Is_teacher is_jiaowu_chu(tea[msg.sender].xueyuan){
                                the_real_term[_n] = term(_bx_score,0,_bx_score,_n);
                                m=_n;
                                emit luruTerm_event(_bx_score,_n);
          }

        event  show_j(address jiao,string tea_name);

        function show_jiaowuchu() public {
            for(uint i =0;i<the_real_jiaowu[stud[msg.sender].xueyuan].j_w.length;i++){
                emit show_j(the_real_jiaowu[stud[msg.sender].xueyuan].j_w[i],tea[the_real_jiaowu[stud[msg.sender].xueyuan].j_w[i]].name);
            }
        }

        function luru_all_xuanxiu_score(uint _n)public Is_teacher is_jiaowu_chu(tea[msg.sender].xueyuan){
                              all_xuanxiu_score = _n;
                              emit luru_xuan_all_score_event(_n);
                          }


}
