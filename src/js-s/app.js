if (typeof web3 !== 'undefined') {
            web3 = new Web3(web3.currentProvider);
        } else {
            web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
        }
        web3.eth.defaultAccount = web3.eth.accounts[0];


        var xuanAbi =[
          {
            "constant": false,
            "inputs": [
              {
                "name": "stu",
                "type": "address"
              },
              {
                "name": "_n",
                "type": "uint256"
              }
            ],
            "name": "lurudang",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [],
            "name": "chakan_xiangxi_xinxi",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [],
            "name": "show_stu_xuefen",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [],
            "name": "_showTea",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "name": "yourname",
                "type": "string"
              },
              {
                "name": "yourpassword",
                "type": "string"
              }
            ],
            "name": "_login",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [
              {
                "name": "",
                "type": "uint256"
              }
            ],
            "name": "class4",
            "outputs": [
              {
                "name": "",
                "type": "uint256"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "name": "stu",
                "type": "address"
              }
            ],
            "name": "cha_chengjiu",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "name": "stu",
                "type": "address"
              },
              {
                "name": "t",
                "type": "uint256"
              }
            ],
            "name": "is_pass_term2",
            "outputs": [
              {
                "name": "",
                "type": "bool"
              }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "name": "_id",
                "type": "uint256"
              }
            ],
            "name": "stu_chongxiu",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [],
            "name": "cha_chongxiu",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "name": "_n",
                "type": "uint256"
              }
            ],
            "name": "luru_all_xuanxiu_score",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [
              {
                "name": "",
                "type": "uint256"
              }
            ],
            "name": "class1",
            "outputs": [
              {
                "name": "",
                "type": "uint256"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [],
            "name": "is_biye",
            "outputs": [
              {
                "name": "",
                "type": "bool"
              }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [],
            "name": "m",
            "outputs": [
              {
                "name": "",
                "type": "uint256"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "name": "stu",
                "type": "address"
              },
              {
                "name": "chengjiu",
                "type": "string"
              }
            ],
            "name": "chengjiuluru",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "name": "_bx_score",
                "type": "uint256"
              },
              {
                "name": "_n",
                "type": "uint256"
              }
            ],
            "name": "luruterm",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "name": "stu",
                "type": "address"
              }
            ],
            "name": "cha_ta_chengjiu",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [],
            "name": "print_chengjidan",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "name": "_name",
                "type": "string"
              },
              {
                "name": "_id",
                "type": "uint256"
              },
              {
                "name": "_xueyuan",
                "type": "string"
              },
              {
                "name": "_zhuanye",
                "type": "string"
              },
              {
                "name": "_jiaowuchu",
                "type": "bool"
              }
            ],
            "name": "luruTea",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [
              {
                "name": "",
                "type": "uint256"
              }
            ],
            "name": "stu_address",
            "outputs": [
              {
                "name": "",
                "type": "address"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "name": "stu",
                "type": "address"
              },
              {
                "name": "class_id",
                "type": "uint256"
              }
            ],
            "name": "cha_ta_chengji",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "name": "t",
                "type": "uint256"
              }
            ],
            "name": "is_pass_term",
            "outputs": [
              {
                "name": "",
                "type": "bool"
              }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "name": "_id",
                "type": "uint256"
              }
            ],
            "name": "stu_xuan_class",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "name": "_name",
                "type": "string"
              },
              {
                "name": "_id",
                "type": "uint256"
              },
              {
                "name": "_xueyuan",
                "type": "string"
              },
              {
                "name": "_zhuanye",
                "type": "string"
              }
            ],
            "name": "luruStu",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [],
            "name": "chafangwen",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "name": "_banji",
                "type": "string"
              },
              {
                "name": "_birth",
                "type": "string"
              },
              {
                "name": "_telephone",
                "type": "uint256"
              },
              {
                "name": "_j",
                "type": "uint256"
              }
            ],
            "name": "luruxiangxixinxi",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [],
            "name": "stu_all_class",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [],
            "name": "chakan_all_xuan",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [
              {
                "name": "",
                "type": "uint256"
              }
            ],
            "name": "class3",
            "outputs": [
              {
                "name": "",
                "type": "uint256"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "name": "newname",
                "type": "string"
              },
              {
                "name": "newpassword",
                "type": "string"
              },
              {
                "name": "yourpost",
                "type": "bool"
              }
            ],
            "name": "_register",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [],
            "name": "all_xuanxiu_score",
            "outputs": [
              {
                "name": "",
                "type": "uint256"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [],
            "name": "show_jiaowuchu",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [],
            "name": "cha_siliuji",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "name": "stu",
                "type": "address"
              },
              {
                "name": "si",
                "type": "bool"
              },
              {
                "name": "siliu_score",
                "type": "uint256"
              }
            ],
            "name": "lurusiliuji",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "name": "stu",
                "type": "address"
              }
            ],
            "name": "jihuo_chengjiu",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [
              {
                "name": "",
                "type": "uint256"
              }
            ],
            "name": "tea_address",
            "outputs": [
              {
                "name": "",
                "type": "address"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "name": "_class_id",
                "type": "uint256"
              }
            ],
            "name": "tea_show_stu_score",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "name": "_stu_id",
                "type": "uint256"
              },
              {
                "name": "_class_id",
                "type": "uint256"
              },
              {
                "name": "_score",
                "type": "uint256"
              },
              {
                "name": "_pingyu",
                "type": "string"
              }
            ],
            "name": "luru_class_score",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "name": "_class",
                "type": "string"
              },
              {
                "name": "_id",
                "type": "uint256"
              },
              {
                "name": "_xuefen",
                "type": "uint256"
              },
              {
                "name": "bixuan",
                "type": "bool"
              }
            ],
            "name": "luru_bixiu_class",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "name": "stu",
                "type": "address"
              }
            ],
            "name": "jihuo",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [
              {
                "name": "",
                "type": "uint256"
              }
            ],
            "name": "class2",
            "outputs": [
              {
                "name": "",
                "type": "uint256"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "name": "name",
                "type": "string"
              },
              {
                "indexed": false,
                "name": "dizhi",
                "type": "string"
              },
              {
                "indexed": false,
                "name": "jianjie",
                "type": "string"
              }
            ],
            "name": "qiye_luru_shijian",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "name": "name",
                "type": "string"
              },
              {
                "indexed": false,
                "name": "id",
                "type": "uint256"
              },
              {
                "indexed": false,
                "name": "siliujichengji",
                "type": "uint256"
              },
              {
                "indexed": false,
                "name": "si_liu",
                "type": "bool"
              },
              {
                "indexed": false,
                "name": "chengjiu",
                "type": "string"
              }
            ],
            "name": "show_biye_stu_chengjiu",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "name": "bi_xuefen",
                "type": "uint256"
              },
              {
                "indexed": false,
                "name": "xuan_xuefen",
                "type": "uint256"
              }
            ],
            "name": "xuefen_shijian",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "name": "chexiao",
                "type": "bool"
              }
            ],
            "name": "chexiao_shijian",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "name": "n",
                "type": "uint256"
              }
            ],
            "name": "cha_renshu",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "name": "name",
                "type": "string"
              },
              {
                "indexed": false,
                "name": "id",
                "type": "uint256"
              },
              {
                "indexed": false,
                "name": "score",
                "type": "uint256"
              },
              {
                "indexed": false,
                "name": "bi_xuan",
                "type": "bool"
              },
              {
                "indexed": false,
                "name": "tea_name",
                "type": "string"
              }
            ],
            "name": "print_chengjidan_event",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "name": "name",
                "type": "string"
              },
              {
                "indexed": false,
                "name": "id",
                "type": "uint256"
              },
              {
                "indexed": false,
                "name": "siliujichengji",
                "type": "uint256"
              },
              {
                "indexed": false,
                "name": "si_liu",
                "type": "bool"
              }
            ],
            "name": "show_siliu_Event",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "name": "jiao",
                "type": "address"
              },
              {
                "indexed": false,
                "name": "tea_name",
                "type": "string"
              }
            ],
            "name": "show_j",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "name": "name",
                "type": "string"
              },
              {
                "indexed": false,
                "name": "id",
                "type": "uint256"
              },
              {
                "indexed": false,
                "name": "tea_name",
                "type": "string"
              },
              {
                "indexed": false,
                "name": "xuefen",
                "type": "uint256"
              },
              {
                "indexed": false,
                "name": "bi_xuan",
                "type": "bool"
              }
            ],
            "name": "cha_chongxiu_Event",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "name": "name",
                "type": "string"
              },
              {
                "indexed": false,
                "name": "id",
                "type": "uint256"
              },
              {
                "indexed": false,
                "name": "class_name",
                "type": "string"
              },
              {
                "indexed": false,
                "name": "class_id",
                "type": "uint256"
              },
              {
                "indexed": false,
                "name": "bi_xuan",
                "type": "bool"
              },
              {
                "indexed": false,
                "name": "can",
                "type": "bool"
              },
              {
                "indexed": false,
                "name": "score",
                "type": "uint256"
              }
            ],
            "name": "cha_ta_chengji_Event",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "name": "name",
                "type": "string"
              },
              {
                "indexed": false,
                "name": "id",
                "type": "uint256"
              },
              {
                "indexed": false,
                "name": "chengjiu",
                "type": "string"
              },
              {
                "indexed": false,
                "name": "chengjiu_can",
                "type": "bool"
              }
            ],
            "name": "cha_ta_chengjiu_shijian",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "name": "chengjiu_can",
                "type": "bool"
              }
            ],
            "name": "jihuochengjiu_shijian",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "name": "banji",
                "type": "string"
              },
              {
                "indexed": false,
                "name": "birth",
                "type": "string"
              },
              {
                "indexed": false,
                "name": "telephone",
                "type": "uint256"
              },
              {
                "indexed": false,
                "name": "nianji",
                "type": "uint256"
              }
            ],
            "name": "luru_xiangxi_event",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "name": "name",
                "type": "string"
              },
              {
                "indexed": false,
                "name": "id",
                "type": "uint256"
              },
              {
                "indexed": false,
                "name": "banji",
                "type": "string"
              },
              {
                "indexed": false,
                "name": "xueyuan",
                "type": "string"
              },
              {
                "indexed": false,
                "name": "zhuanye",
                "type": "string"
              },
              {
                "indexed": false,
                "name": "birth",
                "type": "string"
              },
              {
                "indexed": false,
                "name": "telephone",
                "type": "uint256"
              },
              {
                "indexed": false,
                "name": "j",
                "type": "uint256"
              },
              {
                "indexed": false,
                "name": "dayuan",
                "type": "uint256"
              }
            ],
            "name": "show_x_x",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "name": "name",
                "type": "string"
              },
              {
                "indexed": false,
                "name": "id",
                "type": "uint256"
              },
              {
                "indexed": false,
                "name": "userpost",
                "type": "bool"
              },
              {
                "indexed": false,
                "name": "xueyuan",
                "type": "string"
              },
              {
                "indexed": false,
                "name": "zhuanye",
                "type": "string"
              }
            ],
            "name": "show_tea",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "name": "can",
                "type": "bool"
              }
            ],
            "name": "shouquan_shijian",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "name": "useraddress",
                "type": "address"
              }
            ],
            "name": "register",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "name": "username",
                "type": "string"
              },
              {
                "indexed": false,
                "name": "userpost",
                "type": "bool"
              }
            ],
            "name": "login",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "name": "num",
                "type": "uint256"
              },
              {
                "indexed": false,
                "name": "stu_address",
                "type": "address"
              }
            ],
            "name": "chafangwen_event",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "name": "name",
                "type": "string"
              },
              {
                "indexed": false,
                "name": "id",
                "type": "uint256"
              },
              {
                "indexed": false,
                "name": "xueyuan",
                "type": "string"
              },
              {
                "indexed": false,
                "name": "zhuanye",
                "type": "string"
              }
            ],
            "name": "luru",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "name": "name",
                "type": "string"
              },
              {
                "indexed": false,
                "name": "id",
                "type": "uint256"
              },
              {
                "indexed": false,
                "name": "userpost",
                "type": "bool"
              },
              {
                "indexed": false,
                "name": "zhuanye",
                "type": "string"
              }
            ],
            "name": "show",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "name": "bi_score",
                "type": "uint256"
              },
              {
                "indexed": false,
                "name": "term",
                "type": "uint256"
              }
            ],
            "name": "luruTerm_event",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "name": "xuan_all_score",
                "type": "uint256"
              }
            ],
            "name": "luru_xuan_all_score_event",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "name": "class_name",
                "type": "string"
              },
              {
                "indexed": false,
                "name": "class_id",
                "type": "uint256"
              },
              {
                "indexed": false,
                "name": "class_score",
                "type": "uint256"
              },
              {
                "indexed": false,
                "name": "class_xufen",
                "type": "uint256"
              }
            ],
            "name": "cha_stu_score_event",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "name": "haven_bx",
                "type": "uint256"
              },
              {
                "indexed": false,
                "name": "haven_xx",
                "type": "uint256"
              }
            ],
            "name": "stu_xuefen_event",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "name": "bixiu_name",
                "type": "string"
              },
              {
                "indexed": false,
                "name": "bixiu_id",
                "type": "uint256"
              },
              {
                "indexed": false,
                "name": "bixiu_xuefen",
                "type": "uint256"
              }
            ],
            "name": "luru_bixiu_class_event",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "name": "xuan_class_name",
                "type": "string"
              },
              {
                "indexed": false,
                "name": "xuan_class_id",
                "type": "uint256"
              },
              {
                "indexed": false,
                "name": "xuan_class_xuefen",
                "type": "uint256"
              }
            ],
            "name": "luru_xuanxiu_class_event",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "name": "xuan_class_name",
                "type": "string"
              },
              {
                "indexed": false,
                "name": "xuan_class_id",
                "type": "uint256"
              },
              {
                "indexed": false,
                "name": "xuan_class_xuefen",
                "type": "uint256"
              },
              {
                "indexed": false,
                "name": "xuan_tea_name",
                "type": "string"
              }
            ],
            "name": "chakan_all_xuan_event",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "name": "xuan_class_name",
                "type": "string"
              }
            ],
            "name": "stu_xuan_class_event",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "name": "xueqi",
                "type": "uint256"
              },
              {
                "indexed": false,
                "name": "stu_all_class_name",
                "type": "string"
              },
              {
                "indexed": false,
                "name": "stu_all_class_id",
                "type": "uint256"
              },
              {
                "indexed": false,
                "name": "stu_all_class_xuefen",
                "type": "uint256"
              },
              {
                "indexed": false,
                "name": "stu_all_class_tea_name",
                "type": "string"
              },
              {
                "indexed": false,
                "name": "bi_xuan",
                "type": "bool"
              },
              {
                "indexed": false,
                "name": "_score",
                "type": "uint256"
              },
              {
                "indexed": false,
                "name": "pingyu",
                "type": "string"
              }
            ],
            "name": "stu_all_class_event",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "name": "_stu_id",
                "type": "uint256"
              },
              {
                "indexed": false,
                "name": "_class_id",
                "type": "uint256"
              },
              {
                "indexed": false,
                "name": "_score",
                "type": "uint256"
              },
              {
                "indexed": false,
                "name": "pingyu",
                "type": "string"
              }
            ],
            "name": "luru_class_scoreEvent",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "name": "stuName",
                "type": "string"
              },
              {
                "indexed": false,
                "name": "id",
                "type": "uint256"
              },
              {
                "indexed": false,
                "name": "ke_name",
                "type": "string"
              },
              {
                "indexed": false,
                "name": "ke_id",
                "type": "uint256"
              },
              {
                "indexed": false,
                "name": "bi_xuan",
                "type": "bool"
              },
              {
                "indexed": false,
                "name": "score",
                "type": "uint256"
              }
            ],
            "name": "cha_ta_chengji_Event",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "name": "stu_name",
                "type": "string"
              },
              {
                "indexed": false,
                "name": "_stu_id",
                "type": "uint256"
              },
              {
                "indexed": false,
                "name": "is_pass",
                "type": "bool"
              }
            ],
            "name": "is_pass_termEvent",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "name": "stu_name",
                "type": "string"
              },
              {
                "indexed": false,
                "name": "stu_id",
                "type": "uint256"
              },
              {
                "indexed": false,
                "name": "stu_xueyuan",
                "type": "string"
              },
              {
                "indexed": false,
                "name": "stu_zhuanye",
                "type": "string"
              },
              {
                "indexed": false,
                "name": "biye_true",
                "type": "bool"
              }
            ],
            "name": "biyeEvent",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "name": "stu_name",
                "type": "string"
              },
              {
                "indexed": false,
                "name": "stu_all_class_name",
                "type": "string"
              },
              {
                "indexed": false,
                "name": "stu_all_class_id",
                "type": "uint256"
              },
              {
                "indexed": false,
                "name": "stu_all_class_xuefen",
                "type": "uint256"
              },
              {
                "indexed": false,
                "name": "stu_all_class_tea_name",
                "type": "string"
              },
              {
                "indexed": false,
                "name": "bi_xuan",
                "type": "bool"
              },
              {
                "indexed": false,
                "name": "_score",
                "type": "uint256"
              }
            ],
            "name": "tea_cha_scoreEvent",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "name": "name",
                "type": "string"
              },
              {
                "indexed": false,
                "name": "id",
                "type": "uint256"
              },
              {
                "indexed": false,
                "name": "chengjiu",
                "type": "string"
              }
            ],
            "name": "chengjiu_Event",
            "type": "event"
          },
          {
            "constant": false,
            "inputs": [
              {
                "name": "newname",
                "type": "string"
              },
              {
                "name": "newpassword",
                "type": "string"
              }
            ],
            "name": "qiye_register",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "name": "yourname",
                "type": "string"
              },
              {
                "name": "yourpassword",
                "type": "string"
              }
            ],
            "name": "qiye_degnlu",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [],
            "name": "cha_qiye_dizhi",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "name": "qiye_address",
                "type": "address"
              }
            ],
            "name": "qiye_shouquan",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "name": "_name",
                "type": "string"
              },
              {
                "name": "_dizhi",
                "type": "string"
              },
              {
                "name": "jianjie",
                "type": "string"
              }
            ],
            "name": "qiye_luru",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "name": "addr",
                "type": "address"
              }
            ],
            "name": "cha_qiye",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "name": "t",
                "type": "uint256"
              }
            ],
            "name": "cha_xueqi_pass",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "name": "stu",
                "type": "address"
              }
            ],
            "name": "biye_stu_info",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "name": "stu",
                "type": "address"
              }
            ],
            "name": "biye_stu_kecheng",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "name": "stu",
                "type": "address"
              }
            ],
            "name": "biye_stu_chengjiu",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [],
            "name": "tongji_xuefen",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "name": "stu",
                "type": "address"
              }
            ],
            "name": "chexiao",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [],
            "name": "cha_stu_renshu",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [],
            "name": "cha_biye_renshu",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          }
        ];

        var lu_class_test =web3.eth.contract(xuanAbi);

        //var CoursetroContract = web3.eth.contract(simpleABi);
        var Coursetro = lu_class_test.at("0x7c44695CA67C60C8b02Ef9b330cE58444A3cF036");

      var regevent = Coursetro.register();
      var logevent = Coursetro.login();
      var modifyevent = Coursetro.luru();
      var display = Coursetro.show_tea();
      var displayTerm = Coursetro.luruTerm_event();
      var luru_bixiu_classEvent = Coursetro.luru_bixiu_class_event();
      var chakan_all_xuanEvent = Coursetro.chakan_all_xuan_event();
      var stu_xuan_classEvent = Coursetro.stu_xuan_class_event();
      var chakan_all_classEvent = Coursetro.stu_all_class_event();
      var display_xuan_score = Coursetro.luru_xuan_all_score_event();
      var luru_chengji = Coursetro.luru_class_scoreEvent();
      var xianshi_score = Coursetro.cha_stu_score_event();
      var xuefen_event = Coursetro.stu_xuefen_event();
      var xuenian_event = Coursetro.is_pass_termEvent();
      var biye_event = Coursetro.biyeEvent();
      var tea_cha_score_event =  Coursetro.tea_cha_scoreEvent();
      var luru_stu_xiangxi_event = Coursetro.luru_xiangxi_event();
      var luru_stu_cha_xiangxi_event = Coursetro.show_x_x();
      var cha_ta_chengji_shijian = Coursetro.cha_ta_chengji_Event();
      var luru_chengjiu_event = Coursetro.chengjiu_Event();

      $("#button_dizhi").click(function(){
          var account = $("#user").val();
          if(web3.isAddress(account)){
            $("#info").html('您的账户地址：'+account);
          }else {
            alert("地址格式错误");
          }
          if(typeof(Storage)!=="undefined")
          {
            localStorage.userad=account;
          } else {
            alert("不支持");
          }
        });


        $("#button_register").click(function() {
                      var account = $("#user").val();
                      if(web3.isAddress(account)){
                          $("#info").html('您的账户地址：'+account);
                      }
                      else{
                        alert("地址格式错误");
                      }
                      if(($("#name").val())=="" || ($("#password").val()=="")){
                        alert("输入不能为空");
                      }else {
                          Coursetro._register($("#name").val(), $("#password").val(), Boolean($("#post").val()),{from:account,gas:1000000 },function(error,result){
                            if(!error){

                             console.log();
                           }else {
                               alert(error);
                             }
                          }) ;
                          regevent.watch(function(error, result) {
                            if (!error)
                                {
                                    alert("注册成功！");
                                     $(location).attr('href', './index1.html');
                                } else {
                                    console.log(error);
                                }
                            regevent.stopWatching();
                              });
                        }
                  });

        $("#button_qiye_register").click(function() {

                                var account = $("#user").val();
                                if(web3.isAddress(account)){
                                    $("#info").html('您的账户地址：'+account);
                                }
                                else{
                                  alert("地址格式错误");
                                }
                                if(($("#name").val())=="" || ($("#password").val()=="")){
                                  alert("输入不能为空");
                                }else {
                                    Coursetro.qiye_register($("#name").val(), $("#password").val(),{from:account,gas:1000000 },function(error,result){
                                      if(!error){

                                       console.log();
                                     }else {
                                         alert(error);
                                       }
                                    }) ;
                                    regevent.watch(function(error, result) {
                                      if (!error)
                                          {
                                              alert("注册成功");
                                               $(location).attr('href', './index1.html');
                                          } else {
                                              console.log(error);
                                          }
                                      regevent.stopWatching();
                                        });
                                  }
                            });

        $("#button_qiye_login").click(function() {
                    var account = $("#user").val();

                      Coursetro.qiye_degnlu($("#qiye_name").val(), $("#qiye_mima").val(),{from:account,gas:1000000 },function(error,result){
                         if(!error){
                           console.log();
                           logevent.watch(function(error, result) {
                              if (!error)
                                  {
                                      if(result.args.userpost){
                                        logevent.stopWatching();
                                          $(location).attr('href', './qiye.html');//能正确跳转
                                      }
                                      else{
                                        alert("您现在还无法登录！");
                                      }

                                  } else {
                                    console.log(error);
                                  }
                             });
                         }else {
                            alert(error);
                         }
                       }) ;

                });


        $("#qiye_shenqing_login").click(function() {
                  var account = $("#user").val();

                    Coursetro.qiye_degnlu($("#qiye_name").val(), $("#qiye_mima").val(),{from:account,gas:1000000 },function(error,result){
                       if(!error){
                         console.log();
                         logevent.watch(function(error, result) {
                            if (!error)
                                {
                                    if(result.args.userpost){
                                      logevent.stopWatching();
                                        $(location).attr('href', './qiye.html');//能正确跳转
                                    }
                                    else{
                                      alert("已提交申请，请稍后再登录！");
                                    }

                                } else {
                                  console.log(error);
                                }
                           });
                       }else {
                          alert(error);
                       }
                     }) ;

                });

                var qiyeliebiao = $("#dizhiliebiao").hide();
                var cha_qiye_event = Coursetro.qiye_luru_shijian();
                $("#button_cha_qiye_liebiao").click(function() {
                  var account = $("#user").val();
                    Coursetro.cha_qiye_dizhi({from:account,gas:1000000 },function(error,result){
                       if(!error){
                         qiyeliebiao.show();
                         charenshu.watch(function(error, result) {
                           if (!error){
                                 $("#ceshiqiye").append(
                                      `<tr>
                                          <td><h4>${result.args.stu_address}</h4></td>
                                             </tr>`);
                           } else {
                               console.log(error);
                           }
                           charenshu.stopWatching();
                           });
                       }else {
                          alert(error);
                       }
                     }) ;

                });

                $("#button_shouquan_qiye").click(function() {
                  var account = $("#user").val();

                    Coursetro.qiye_shouquan($("#shouquan_qiye_dizhi").val(),{from:account,gas:1000000 },function(error,result){
                       if(!error){
                         logevent.watch(function(error, result) {
                           if (!error){
                              if(result.args.userpost){
                                alert("授权成功！");
                              }
                              else{
                                alert("授权失败");
                              }
                           } else {
                               console.log(error);
                           }
                           logevent.stopWatching();
                           });
                       }else {
                          alert(error);
                       }
                     }) ;

                });



                  $("#button_login").click(function() {
                    var account = $("#user").val();
                      Coursetro._login($("#name1").val(), $("#password1").val(),{from:account,gas:1000000 },function(error,result){
                         if(!error){
                           console.log();
                           logevent.watch(function(error, result) {
                              if (!error)
                                  {
                                    var n ;
                                    if(result.args.userpost==true){
                                      n = "教师";
                                    }
                                    else if(result.args.userpost==false){
                                        n ="学生";
                                      }
                                      alert(n+"登录成功！");
                                    if(result.args.userpost==false){
                                      logevent.stopWatching();
                                       $(location).attr('href', './stu.html');//能正确跳转
                                     }
                                    else{
                                      logevent.stopWatching();
                                      $(location).attr('href', './manager.html');//能正确跳转
                                    }

                                  } else {
                                    console.log(error);
                                  }
                             });
                         }else {
                            alert(error);
                         }
                       }) ;

                });

                var qiyeluru_shijian = Coursetro.qiye_luru_shijian();
                $("#button_qiye_dengji").click(function() {
                     var account = $("#user").val();
                   Coursetro.qiye_luru($("#qiye_name").val(),$("#qiye_add").val(),$("#qiye_jianjie").val(),{from:account,gas:1000000 },function(error,result){
                   if(!error){
                     qiyeluru_shijian.watch(function(error, result) {
                       if (!error){
                           alert("录入信息成功！");
                       } else {
                           console.log(error);
                       }
                       qiyeluru_shijian.stopWatching();
                       });
                   }else {
                       alert(error);
                   }
                 }) ;
                });

                var chaqiye = $("#chaqiye").hide();
                var qiyeluru_shijian = Coursetro.qiye_luru_shijian();
                $("#button_qiye_cha_geren").click(function() {
                     var account = $("#user").val();
                     Coursetro.cha_qiye($("#qiye_dizhi").val(),{from:account,gas:1000000 },function(error,result){
                   if(!error){
                     chaqiye.show();
                     qiyeluru_shijian.watch(function(error, result) {
                       if (!error){
                           alert("查看成功！");

                             $("#ceshi").append(
                            `
                                      <td><h4>${result.args.name}</h4></td>
                                      <td><h4>${result.args.dizhi}</h4></td>
                                      <td><h4>${result.args.jianjie}</h4></td>

                                                                 `);

                       } else {
                           console.log(error);
                       }
                       qiyeluru_shijian.stopWatching();
                       });
                   }else {
                       alert(error);
                   }
                 }) ;
                });


                var showStu = $("#asd").hide();
                $("#button_stu_luru").click(function() {
                     var account = $("#user").val();

                     Coursetro.luruStu($("#StuName").val(), $("#StuId").val(),$("#Stuxueyuan").val(),$("#StuZhuan").val(),{from:account,gas:1000000 },function(error,result){
                   if(!error){

                     modifyevent.watch(function(error, result) {
                        var showStu = $("#asd").show();
                       if (!error){
                         alert("录入成功");
                         $("#ceshi").append(
                              `<tr>
                                  <td><h4>${result.args.name}</h4></td>
                                  <td><h4>${result.args.id}</h4></td>
                                  <td><h4>${result.args.xueyuan}</h4></td>
                                  <td><h4>${result.args.zhuanye}</h4></td>
                                     </tr>`);

                       } else {
                           console.log(error);
                       }
                       modifyevent.stopWatching();
                       });
                   }else {
                       alert(error);
                   }
                 }) ;
               });

               var xiangxi = $("#xiangxi").hide();
               $("#button_stu_luru_xiangxi").click(function() {
                    var account = $("#user").val();

                    Coursetro.luruxiangxixinxi($("#banji").val(), $("#nianyueri").val(),$("#shoujihao").val(),$("#nianji").val(),{from:account,gas:1000000 },function(error,result){
                  if(!error){
                    xiangxi.show();
                    luru_stu_xiangxi_event.watch(function(error, result) {
                      if (!error){
                          alert("录入学生个人详细信息成功！");
                          $("#ceshi").append(
                               `<tr>
                                   <td><h4>${result.args.banji}</h4></td>
                                   <td><h4>${result.args.birth}</h4></td>
                                   <td><h4>${result.args.telephone}</h4></td>
                                   <td><h4>${result.args.nianji}</h4></td>
                                      </tr>`);
                      } else {
                          console.log(error);
                      }
                      luru_stu_xiangxi_event.stopWatching();
                      });
                  }else {
                      alert(error);
                  }
                }) ;
              });

               var chageren = $("#chageren").hide();
               $("#button_stu_cha_geren").click(function() {
              var account = $("#user").val();

              Coursetro.chakan_xiangxi_xinxi({from:account,gas:1000000},function(error,result){
                 if(!error){
                   chageren.show();
                   luru_stu_cha_xiangxi_event.watch(function(error, result) {
                     if (!error){
                       var n ;
                       if(result.args.dayuan == 0){
                         n = "无";
                       }
                       else if(result.args.dayuan == 1){
                         n = "共青团员";
                       }
                       else if(result.args.dayuan == 2){
                         n = "预备党员";
                       }
                       else if(result.args.dayuan == 3){
                         n = "中共党员";
                       }

                       $("#ceshi_geren").append(
                            `<tr>
                                <td><h4>${result.args.name}</h4></td>
                                <td><h4>${result.args.id}</h4></td>
                                <td><h4>${result.args.xueyuan}</h4></td>
                                <td><h4>${result.args.zhuanye}</h4></td>
                                <td><h4>${result.args.banji}</h4></td>
                                <td><h4>${result.args.birth}</h4></td>
                                <td><h4>${result.args.telephone}</h4></td>
                                <td><h4>${n}</h4></td>
                                   </tr>`);
                         } else {
                             console.log(error);
                           }
                      });
                      luru_stu_cha_xiangxi_event.stopWatching();
                }else {
                    alert(error);
                  }
               }) ;
        });

        $("#button_luru_tea").click(function() {
        var account = $("#user").val();

        Coursetro.luruTea($("#name").val(), $("#zhigonghao").val(),$("#xueyuan").val(),
        $("#TeaZhuan").val(),Boolean($("#jiaowuchu").val()),
        {from:account,gas:1000000 },function(error,result){
        if(!error){
        modifyevent.watch(function(error, result) {
          if (!error){
              alert("录入教师信息成功！");
          } else {
              console.log(error);
          }
          modifyevent.stopWatching();
          });
        }else {
          alert(error);
        }
        }) ;
        });


        var laoshi_chageren = $("#laoshi_chageren").hide();
        $("#button_tea_cha_geren").click(function() {
                  var account = $("#user").val();

                  Coursetro._showTea({from:account,gas:1000000},function(error,result){

                     if(!error){
                       laoshi_chageren.show();
                       display.watch(function(error, result) {

                         if (!error){
                           alert("查询成功");
                                 $("#ceshi2").append(
                                `
                                          <td><h4>${result.args.name}</h4></td>
                                          <td><h4>${result.args.id}</h4></td>
                                          <td><h4>${result.args.xueyuan}</h4></td>
                                          <td><h4>${result.args.zhuanye}</h4></td>
                                                                     `);

                             } else {
                                 console.log(error);
                               }
                          });
                          display.stopWatching();
                    }else {
                        alert(error);
                      }
                   }) ;
            });



        var charenshu_shijian = Coursetro.cha_renshu();
        $("#button_tea_cha_renshu").click(function() {
            var account = $("#user").val();

          Coursetro.cha_stu_renshu({from:account,gas:1000000},function(error,result){

             if(!error){
               laoshi_chageren.show();
               charenshu_shijian.watch(function(error, result) {
                 if (!error){
                   alert("查询成功");
                         $("#cha_ren_shu").append(
                        `
                                  <td><h4>${"学院人数："+result.args.n}</h4></td>
                                                             `);

                     } else {
                         console.log(error);
                       }
                  });
                  charenshu_shijian.stopWatching();
            }else {
                alert(error);
              }
           }) ;
    });

        $("#button_tea_cha_biye_renshu").click(function() {
          var account = $("#user").val();
          Coursetro.cha_biye_renshu({from:account,gas:1000000},function(error,result){
         if(!error){
           charenshu_shijian.watch(function(error, result) {
             if (!error){
               alert("查询成功");
                     $("#cha_biye_ren_shu").append(
                    `
                              <td><h4>${"毕业人数："+result.args.n}</h4></td>
                                                         `);

                 } else {
                     console.log(error);
                   }
              });
              charenshu_shijian.stopWatching();
        }else {
            alert(error);
          }
       }) ;
});
            var laoshi_lu_xueqi = $("#laoshi_lu_xueqi").hide();
            $("#button_luru_term").click(function() {
            var account = $("#user").val();

            Coursetro.luruterm($("#bx_score").val(), $("#term_id").val(),{from:account,gas:1000000 },function(error,result){
            if(!error){
              laoshi_lu_xueqi.show();
            displayTerm.watch(function(error, result) {
              if (!error){
                  alert("录入学期信息成功！");
                  $("#ceshi1").append(
                 `
                           <td><h4>${result.args.term}</h4></td>
                           <td><h4>${result.args.bi_score}</h4></td>
                                                      `);
              } else {
                  console.log(error);
              }
              displayTerm.stopWatching();
              });
            }else {
              alert(error);
            }
            }) ;
            });

            var laoshi_lu_xuan = $("#laoshi_lu_xuan").hide();
            $("#button_luru_xuan_score").click(function() {
            var account = $("#user").val();
            Coursetro.luru_all_xuanxiu_score($("#all_xuan_score").val(),{from:account,gas:1000000 },function(error,result){
            if(!error){
              laoshi_lu_xuan.show();
            display_xuan_score.watch(function(error, result) {
              if (!error){
                  alert("录入学期信息成功！");
                  $("#ceshi").append(
                 `
                           <td><h4>${result.args.xuan_all_score}</h4></td>
                                                      `);
              } else {
                  console.log(error);
              }
              display_xuan_score.stopWatching();
              });
            }else {
              alert(error);
            }
            }) ;
            });

            $("#button_luru_bi_class").click(function() {
            var account = $("#user").val();
            Coursetro.luru_bixiu_class($("#bi_ke_name").val(), $("#bi_ke_id").val(),$("#bi_ke_xuefen").val(),
            Boolean($("#post").val()),{from:account,gas:1000000 },function(error,result){
            if(!error){
            luru_bixiu_classEvent.watch(function(error, result) {
              if (!error){
                  alert("录入课程信息成功！");

              } else {
                  alert("与当前学生专业不符");
                  console.log(error);
              }
              luru_bixiu_classEvent.stopWatching();
              });
            }else {
              alert(error);
            }
            }) ;
            });

            var stu_cha_xuanke = $("#stu_cha_xuanke").hide();
            $("#button_cha_xuan_class").click(function() {
            var account = $("#user").val();
            Coursetro.chakan_all_xuan({from:account,gas:1000000 },function(error,result){
            if(!error){
              stu_cha_xuanke.show();
            chakan_all_xuanEvent.watch(function(error, result) {
              if (!error){
                $("#ceshi").append(
               `           <tr>
                         <td><h4>${result.args.xuan_class_name}</h4></td>
                         <td><h4>${result.args.xuan_class_id}</h4></td>
                         <td><h4>${result.args.xuan_class_xuefen}</h4></td>
                         <td><h4>${result.args.xuan_tea_name}</h4></td>
                         <td><h4>${"选修"}</h4></td>
                          </tr>
                         <br>
                                                    `);
              } else {
                  console.log(error);
              }
              chakan_all_xuanEvent.stopWatching();
              });
            }else {
              alert(error);
            }
            }) ;
            });

            $("#button_xuan_class_by_id").click(function() {
            var account = $("#user").val();
            Coursetro.stu_xuan_class($("#xuan_class_id").val(),{from:account,gas:1000000 },function(error,result){
            if(!error){
            stu_xuan_classEvent.watch(function(error, result) {
              if (!error){
                alert("选课成功");
              } else {
                  console.log(error);
              }
              stu_xuan_classEvent.stopWatching();
              });
            }else {
              alert(error);
            }
            }) ;
            });

            var stu_cha_kecheng = $("#stu_cha_kecheng").hide();
            $("#button_cha_all_class").click(function() {
            var account = $("#user").val();
            stu_cha_kecheng.show();
            Coursetro.stu_all_class({from:account,gas:1000000 },function(error,result){

            if(!error){
            chakan_all_classEvent.watch(function(error, result) {
                      if (!error){

                          var n ;
                            if(result.args.bi_xuan)
                              n = "必修";
                            else
                              n = "选修";
                              $("#ceshi").append(
                             `         <tr>
                                       <td><h4>${result.args.stu_all_class_name}</h4></td>
                                       <td><h4>${result.args.stu_all_class_id}</h4></td>
                                       <td><h4>${result.args.stu_all_class_xuefen}</h4></td>
                                       <td><h4>${result.args.stu_all_class_tea_name}</h4></td>
                                       <td><h4>${n}</h4></td>
                                       </tr>
                                       <br>
                                                                  `);
              } else {
                  console.log(error);
              }
              chakan_all_classEvent.stopWatching();
              });
            }else {
              alert(error);
            }
            }) ;
            });

            $("#button_luru_score").click(function() {
            var account = $("#user").val();

            Coursetro.luru_class_score($("#stu_id").val(),$("#ke_id").val(),$("#ke_score").val(),$("#ke_pingyu").val(),{from:account,gas:1000000 },function(error,result){
            if(!error){
            luru_chengji.watch(function(error, result) {
                      if (!error){
                        alert("录入成绩成功！");

              } else {
                  console.log(error);
              }
              luru_chengji.stopWatching();
              });
            }else {
              alert(error);
            }
            }) ;
            });



            var chachengji = $("#chachengji").hide();
            $("#button_show_stu1").click(function() {
            var account = $("#user").val();
            chachengji.show();
            Coursetro.stu_all_class({from:account,gas:1000000 },function(error,result){
            if(!error){
            chakan_all_classEvent.watch(function(error, result) {
                      if (!error){
                          var n ;
                            if(result.args.bi_xuan)
                              n = "必修";
                            else
                              n = "选修";
                              $("#ceshi").append(
                             `         <tr>
                                       <td><h4>${result.args.stu_all_class_name}</h4></td>
                                       <td><h4>${result.args.stu_all_class_id}</h4></td>
                                       <td><h4>${result.args.stu_all_class_xuefen}</h4></td>
                                       <td><h4>${result.args.stu_all_class_tea_name}</h4></td>
                                       <td><h4>${result.args._score}</h4>
                                       <td><h4>${n}</h4>
                                       <td><h4>${result.args.pingyu}</h4>
                                       </td>
                                       </tr>
                                       <br>
                                                                  `);

              } else {
                  console.log(error);
              }
              chakan_all_classEvent.stopWatching();
              });
            }else {
              alert(error);
            }
            }) ;
            });


            var chachengji = $("#chachengji").hide();
            $("#button_show_stu2").click(function() {
            var account = $("#user").val();
            chachengji.show();
            Coursetro.stu_all_class({from:account,gas:1000000 },function(error,result){
            if(!error){
            chakan_all_classEvent.watch(function(error, result) {
                      if (!error){
                          var n ;
                            if(result.args.bi_xuan)
                              n = "必修";
                            else
                              n = "选修";
                              $("#ceshi").append(
                             `         <tr>
                                       <td><h4>${result.args.stu_all_class_name}</h4></td>
                                       <td><h4>${result.args.stu_all_class_id}</h4></td>
                                       <td><h4>${result.args.stu_all_class_xuefen}</h4></td>
                                       <td><h4>${result.args.stu_all_class_tea_name}</h4></td>
                                       <td><h4>${result.args._score}</h4>
                                       <td><h4>${n}</h4>

                                       </td>
                                       </tr>
                                       <br>
                                                                  `);

              } else {
                  console.log(error);
              }
              chakan_all_classEvent.stopWatching();
              });
            }else {
              alert(error);
            }
            }) ;
            });

            var chatarenchengji = $("#chatarenchengji").hide();
            $("#button_cha_ta_chengji").click(function() {
            var account = $("#user").val();
            Coursetro.cha_ta_chengji($("#xueAddress").val(),$("#ke_id").val(),{from:account,gas:1000000 },function(error,result){
            if(!error){
            chatarenchengji.show();
            cha_ta_chengji_shijian.watch(function(error, result) {
                      if (!error){
                          var n ;
                          var b;
                          if(result.args.bi_xuan){
                            b = "必修";
                          }
                          else{
                            b = "选修";
                          }

                            if(result.args.can){
                              n = "查看成功!";
                              alert(n);
                              $("#ceshi").append(
                             `         <tr>
                                       <td><h4>${result.args.name}</h4></td>
                                       <td><h4>${result.args.id}</h4></td>
                                       <td><h4>${result.args.class_name}</h4></td>
                                       <td><h4>${result.args.class_id}</h4></td>
                                       <td><h4>${result.args.score}</h4>
                                       <td><h4>${b}</h4>
                                       </td>
                                       </tr>
                                       <br>
                                                                  `);
                            }
                            else{
                                n = "无权查看！";
                                alert(n);
                            }
              } else {
                  console.log(error);
              }
              cha_ta_chengji_shijian.stopWatching();
              });
            }else {
              alert(error);
            }
            }) ;
            });


            var chatarenchengji_cishu1 = $("#chatarenchengji_cishu1").hide();
            var charenshu = Coursetro.chafangwen_event();
            $("#button_cha_renshu").click(function() {
            var account = $("#user").val();
            Coursetro.chafangwen({from:account,gas:1000000 },function(error,result){
            if(!error){
            chatarenchengji_cishu1.show();
            charenshu.watch(function(error, result) {
                      if (!error){

                        $("#ceshi1").append(
                       `         <tr>
                                 <td><h4>${result.args.num}</h4></td>
                                 <td><h4>${result.args.stu_address}</h4></td>
                                 </tr>
                                 <br>
                                                            `);
                            }
               else {
                  console.log(error);
                    }
              charenshu.stopWatching();
              });
            }else {
              alert(error);
            }
            }) ;
            }) ;


            var chatarenchengji_cishu = $("#chatarenchengji_cishu").hide();
            var charenshu = Coursetro.chafangwen_event();
            $("#button_cha_renshu").click(function() {
            var account = $("#user").val();
            Coursetro.chafangwen({from:account,gas:1000000 },function(error,result){
            if(!error){
            chatarenchengji_cishu.show();
            charenshu.watch(function(error, result) {
                      if (!error){

                        $("#ceshi1").append(
                       `         <tr>
                                 <td><h4>${result.args.num}</h4></td>
                                 <td><h4>${result.args.stu_address}</h4></td>
                                 </tr>
                                 <br>
                                                            `);
                            }
               else {
                  console.log(error);
                    }
              charenshu.stopWatching();
              });
            }else {
              alert(error);
            }
            }) ;
            }) ;

            var shouquan_event = Coursetro.shouquan_shijian();
            $("#button_shouquan").click(function() {
            var account = $("#user").val();
            Coursetro.jihuo($("#shouquan_ta").val(),{from:account,gas:1000000 },function(error,result){
            if(!error){
            shouquan_event.watch(function(error, result) {
                      if (!error){
                            if(result.args.can){
                              alert("授权成功！");
                            }
                            else{
                              alert("授权失败,重新授权");
                            }
              } else {
                  console.log(error);
              }
              shouquan_event.stopWatching();
              });
            }else {
              alert(error);
            }
            }) ;
            });

            var chatachengjiu = $("#chatachengjiu").hide();
            var cha_ta_chengjiu_event = Coursetro.cha_ta_chengjiu_shijian();
            $("#button_cha_ta_chengjiu").click(function() {
            var account = $("#user").val();
            Coursetro.cha_ta_chengjiu($("#cha_chengjiu_dizhi").val(),{from:account,gas:1000000 },function(error,result){
            chatachengjiu.show();
            if(!error){

            cha_ta_chengjiu_event.watch(function(error, result) {
                      if (!error){
                          var n ;

                            alert("查看成功");
                              $("#ceshi").append(
                                   `<tr>
                                       <td><h4>${result.args.name}</h4></td>
                                       <td><h4>${result.args.id}</h4></td>
                                       <td><h4>${result.args.chengjiu}</h4></td>
                                          </tr>`);


              } else {
                  console.log(error);
              }
              cha_ta_chengjiu_event.stopWatching();
              });
            }else {
              alert(error);
            }
            }) ;
            });


            var shouquan_chengjiu_shijian = Coursetro.jihuochengjiu_shijian();
            $("#button_shouquan_cha_ta_chengjiu").click(function() {

            var account = $("#user").val();
            Coursetro.jihuo_chengjiu($("#shouquan_chengjiu_dizhi").val(),{from:account,gas:1000000 },function(error,result){
            if(!error){
            shouquan_chengjiu_shijian.watch(function(error, result) {
                      if (!error){
                            if(result.args.chengjiu_can){
                              alert("授权成功！");
                            }
                            else{
                              alert("授权失败,重新授权");
                            }
              } else {
                  console.log(error);
              }
              shouquan_chengjiu_shijian.stopWatching();
              });
            }else {
              alert(error);
            }
            }) ;
            });

            //以上全部成功
            $("#button_show_xuefen").click(function() {
            var account = $("#user").val();

            Coursetro.show_stu_xuefen({from:account,gas:1000000 },function(error,result){
            if(!error){
            xuefen_event.watch(function(error, result) {
                      if (!error){

                              $("#chakanxuefen").append(`<div class="list">
                              <ul>
                              <li>必修学分: ${result.args.haven_bx}</li>
                              <li>选修学分: ${result.args.haven_xx}</li>
                              </ul>
                              </div>`);
              } else {
                  console.log(error);
              }
              xuefen_event.stopWatching();
              });
            }else {
              alert(error);
            }
            }) ;
            });


            //以上全部成功


            $("#chongxiu_button").click(function() {
            var account = $("#user").val();
            Coursetro.stu_chongxiu($("#chongxiu_id").val(),{from:account,gas:1000000 },function(error,result){
            if(!error){
            luru_bixiu_classEvent.watch(function(error, result) {
              if (!error){
                  alert("重修成功！");
                  $("#chakanchongxiu").append(`<div class="list">
                  <ul>
                  <li>重修名称: ${result.args.bixiu_name}</li>
                  <li>重修Id: ${result.args.bixiu_id}</li>
                  <li>重修学分: ${result.args.bixiu_xuefen}</li>
                  </ul>
                  </div>`);

              } else {
                  console.log(error);
              }
              luru_bixiu_classEvent.stopWatching();
              });
            }else {
              alert(error);
            }
            }) ;
            });

            $("#button_chengjiu").click(function() {
            var account = $("#user").val();

            Coursetro.chengjiuluru($("#xueshengdizhi").val(),$("#xueshengchengjiu").val(),{from:account,gas:1000000 },function(error,result){
            if(!error){
            luru_chengjiu_event.watch(function(error, result) {
                      if (!error){
                        alert("成功录入"+result.args.name+"成就信息！")
              } else {
                  console.log(error);
              }
              luru_chengjiu_event.stopWatching();
              });
            }else {
              alert(error);
            }
            }) ;
            });
            var chachengjiu = $("#chachengjiu").hide()
            $("#button_chachengjiu").click(function() {
            var account = $("#user").val();
            chachengjiu.show();
            Coursetro.cha_chengjiu($("#chadizhi").val(),{from:account,gas:1000000 },function(error,result){
            if(!error){
            luru_chengjiu_event.watch(function(error, result) {
                      if (!error){

                        $("#ceshi").append(
                             `<tr>
                                 <td><h4>${result.args.name}</h4></td>
                                 <td><h4>${result.args.id}</h4></td>
                                 <td><h4>${result.args.chengjiu}</h4></td>
                                    </tr>`);

              } else {
                  console.log(error);
              }
              luru_chengjiu_event.stopWatching();
              });
            }else {
              alert(error);
            }
            }) ;
            });


            $("#button_dangji").click(function() {
            var account = $("#user").val();
            Coursetro.lurudang($("#dangji_dizhi").val(),$("#dangji_id").val(),{from:account,gas:1000000 },function(error,result){
            if(!error){
            luru_stu_cha_xiangxi_event.watch(function(error, result) {
                      if (!error){
                        var n ;
                        if(result.args.dayuan == 0){
                          n = "无";
                        }
                        else if(result.args.dayuan == 1){
                          n = "共青团员";
                        }
                        else if(result.args.dayuan == 2){
                          n = "预备党员";
                        }
                        else if(result.args.dayuan == 3){
                          n = "中共党员";
                        }
                        alert("成功录入"+result.args.name+"党籍信息！"+n)

              } else {
                  console.log(error);
              }
              luru_stu_cha_xiangxi_event.stopWatching();
              });
            }else {
              alert(error);
            }
            }) ;
            });

            var siliuji_event = Coursetro.show_siliu_Event();
            $("#button_luru_siliu").click(function() {
            var account = $("#user").val();

            Coursetro.lurusiliuji($("#siliuji_dizhi").val(),Boolean($("#si_liu").val()),$("#siliuji_chengji").val(),{from:account,gas:1000000 },function(error,result){
            if(!error){
            siliuji_event.watch(function(error, result) {
                      if (!error){
                        var n ;
                        if(Boolean($("#si_liu").val())){
                          n = "六级";
                        }
                        else {
                          n = "四级";
                        }
                        alert("成功录入"+n+"成绩！")

              } else {
                  console.log(error);
              }
              siliuji_event.stopWatching();
              });
            }else {
              alert(error);
            }
            }) ;
            });


            $("#pass_term").click(function() {
            var account = $("#user").val();

            Coursetro.is_pass_term($("#xuenian_id").val(),{from:account,gas:1000000 },function(error,result){
            if(!error){
            xuenian_event.watch(function(error, result) {
              if (!error){
                  alert("查看成功！"+$("#xuenian_id").val());
                  var n;
                  if(result.args.is_pass)
                   n="已通过";
                   else {
                  n = "未通过";
                   }
                  $("#xuenian_show").append(`<div class="list">
                  <ul>
                  <li>学生名字: ${result.args.stu_name}</li>
                  <li>学生Id: ${result.args._stu_id}</li>
                  <li>学年: ${$("#xuenian_id").val()}</li>
                  <li>是否通过: ${n}</li>
                  </ul>
                  </div>`);

              } else {
                  console.log(error);
              }
              xuenian_event.stopWatching();
              });
            }else {
              alert(error);
            }
            }) ;
            });
            var chachengjiu = $("#chachengjiu").hide();
            var stu_cha_siliuji_event = Coursetro.show_siliu_Event();
            $("#button_cha_siliuji").click(function() {
            var account = $("#user").val();

            Coursetro.cha_siliuji({from:account,gas:1000000 },function(error,result){
            if(!error){
              chachengjiu.show();
            stu_cha_siliuji_event.watch(function(error, result) {
              if (!error){
                  alert("查看成功！");
                  var n ;
                  if(result.args.si_liu){
                    n = "四级";
                  }
                  else {
                    n = "六级";
                  }
                  $("#ceshi").append(
                       `<tr>
                           <td><h4>${result.args.name}</h4></td>
                           <td><h4>${result.args.id}</h4></td>
                           <td><h4>${n}</h4></td>
                           <td><h4>${result.args.siliujichengji}</h4></td>
                              </tr>`);

              } else {
                  console.log(error);
              }
              stu_cha_siliuji_event.stopWatching();
              });
            }else {
              alert(error);
            }
            }) ;
            });



            var jiaochuwu_xinxi = $("#jiaochuwu_xinxi").hide();
            var chajiaowuchu_event = Coursetro.show_j();
            $("#button_chajiaowuchu").click(function() {
            var account = $("#user").val();
            Coursetro.show_jiaowuchu({from:account,gas:1000000 },function(error,result){
            if(!error){
            jiaochuwu_xinxi.show();
            chajiaowuchu_event.watch(function(error, result) {

              if (!error){
                alert("查看成功！");
                $("#ceshi").append(
                     `<tr>
                         <td><h4>${result.args.tea_name}</h4></td>
                         <td><h4>${result.args.jiao}</h4></td>
                            </tr>`);
              } else {
                  console.log(error);
              }
              chajiaowuchu_event.stopWatching();
              });
            }else {
              alert(error);
            }
            }) ;
            });



            var zhuxiao_shijian = Coursetro.chexiao_shijian();
            $("#button_tea_zhuxiao").click(function() {
            var account = $("#user").val();
            Coursetro.chexiao($("#chexiao_dizhi").val(),{from:account,gas:1000000 },function(error,result){
            if(!error){
            zhuxiao_shijian.watch(function(error, result) {
              if (!error){
                alert("撤销成功！");
              } else {
                  console.log(error);
              }
              zhuxiao_shijian.stopWatching();
              });
            }else {
              alert(error);
            }
            }) ;
            });





            var xuefen_shijian_event = Coursetro.xuefen_shijian();
            var xuefen_div = $("#xuefen_div").hide();
            var chajiaowuchu_event = Coursetro.show_j();
            $("#button_xuefen_tongji").click(function() {
            var account = $("#user").val();

            Coursetro.tongji_xuefen({from:account,gas:1000000 },function(error,result){
            if(!error){
            xuefen_div.show();
            xuefen_shijian_event.watch(function(error, result) {

              if (!error){
                alert("查看成功！");

                $("#ceshi_bi").append(
                     `<div class="row m-t-sm">
                         <div class="col-md-12">
                             <h3>
                             <strong>
                             </strong>已修必修学分：${result.args.bi_xuefen}
                             </h3>
                         </div>
                     </div>
                            `);
                    $("#ceshi_xuan").append(
                       `<div class="row m-t-sm">
                                     <div class="col-md-12">
                                         <h3><strong>
                                         </strong>已修选修学分：${result.args.xuan_xuefen}
                                         </h3>
                                     </div>
                                 </div>
                                        `);
              } else {
                  console.log(error);
              }
              xuefen_shijian_event.stopWatching();
              });
            }else {
              alert(error);
            }
            }) ;
            });





            var stu_cha_chongxiu = $("#stu_cha_chongxiu").hide();
            var cha_chongxiu_event = Coursetro.cha_chongxiu_Event();
            $("#chongxiu_button_cha").click(function() {
            var account = $("#user").val();

            Coursetro.cha_chongxiu({from:account,gas:1000000 },function(error,result){
            if(!error){
            stu_cha_chongxiu.show();
            cha_chongxiu_event.watch(function(error, result) {
              if (!error){
                  alert("查看成功！");
                  var n ;
                    if(result.args.bi_xuan)
                      n = "必修";
                    else
                      n = "选修";
                      $("#chongxiu_").append(
                     `         <tr>
                               <td><h4>${result.args.name}</h4></td>
                               <td><h4>${result.args.id}</h4></td>
                               <td><h4>${result.args.xuefen}</h4></td>
                               <td><h4>${result.args.tea_name}</h4></td>
                               <td><h4>${n}</h4></td>
                               </tr>
                               <br>
                                                          `);

              } else {
                  console.log(error);
              }
              cha_chongxiu_event.stopWatching();
              });
            }else {
              alert(error);
            }
            }) ;
            });


            var cha_chengjidan_event = Coursetro.print_chengjidan_event();
            $("#button_print_chengjidan").click(function() {
            var account = $("#user").val();

            Coursetro.print_chengjidan({from:account,gas:1000000 },function(error,result){
            if(!error){
            cha_chengjidan_event.watch(function(error, result) {
              if (!error){
                  alert("查看成功！");
                  var n;
                  if(result.args.bi_xuan){
                    n= "必修";
                  }
                  else{
                    n = "选修"
                  }
                  $("#chakanchengjidan").append(`<div class="list">
                  <ul>
                  <li>课程名字: ${result.args.name}</li>
                  <li>课程编号: ${result.args.id}</li>
                  <li>课程性质: ${n}</li>
                  <li>任课老师: ${result.args.tea_name}</li>
                  </ul>
                  </div>`);

              } else {
                  console.log(error);
              }
              cha_chengjidan_event.stopWatching();
              });
            }else {
              alert(error);
            }
            }) ;
            });



            var stu_cha_biye = $("#stu_cha_biye").hide();
            $("#biye_button").click(function() {
            var account = $("#user").val();
            stu_cha_biye.show();
            Coursetro.is_biye({from:account,gas:1000000 },function(error,result){
            if(!error){
            biye_event.watch(function(error, result) {
              if (!error){
                  alert("查看成功！");
                  var n;
                  if(result.args.biye_true)
                   n="达到毕业条件";
                   else {
                   n = "未达到毕业条件";
                   }
                   $("#ceshi").append(
                  `         <tr>
                            <td><h4>${result.args.stu_name}</h4></td>
                            <td><h4>${result.args.stu_id}</h4></td>
                            <td><h4>${result.args.stu_xueyuan}</h4></td>
                            <td><h4>${result.args.stu_zhuanye}</h4></td>
                            <td><h4>${n}</h4></td>
                            </tr>
                            <br>
                                                       `);

              } else {

                  console.log(error);

              }
              biye_event.stopWatching();
              });
            }else {
              alert(error);
            }
            }) ;
            });



            var stu_cha_biye_kecheng = $("#stu_cha_biye_kecheng").hide();
            $("#biye_cha_kecheng_button").click(function() {
            var account = $("#user").val();
            stu_cha_biye_kecheng.show();
            Coursetro.biye_stu_kecheng($("#chabiyedizhi").val(),{from:account,gas:1000000 },function(error,result){
            if(!error){
            chakan_all_classEvent.watch(function(error, result) {

              if (!error){
                var n ;
                  if(result.args.bi_xuan)
                    n = "必修";
                  else
                    n = "选修";
                    $("#ceshi2").append(
                   `         <tr>
                             <td><h4>${result.args.stu_all_class_name}</h4></td>
                             <td><h4>${result.args.stu_all_class_id}</h4></td>
                             <td><h4>${result.args.stu_all_class_xuefen}</h4></td>
                             <td><h4>${result.args.stu_all_class_tea_name}</h4></td>
                             <td><h4>${result.args._score}</h4>
                             <td><h4>${n}</h4>
                             <td><h4>${result.args.pingyu}</h4>
                             </td>
                             </tr>
                             <br>
                                                        `);
              } else {

                  console.log(error);

              }
              chakan_all_classEvent.stopWatching();
              });
            }else {
              alert(error);
            }
            }) ;
            });


            var stu_cha_biye_xuesheng = $("#stu_cha_biye_xuesheng").hide();
            $("#biye_cha_stu_button").click(function() {
            var account = $("#user").val();
            Coursetro.biye_stu_info($("#chabiyedizhi").val(),{from:account,gas:1000000 },function(error,result){
            if(!error){
            stu_cha_biye_xuesheng.show();
            luru_stu_cha_xiangxi_event.watch(function(error, result) {
                if (!error){
                  var n ;
                  if(result.args.dayuan == 0){
                    n = "无";
                  }
                  else if(result.args.dayuan == 1){
                    n = "共青团员";
                  }
                  else if(result.args.dayuan == 2){
                    n = "预备党员";
                  }
                  else if(result.args.dayuan == 3){
                    n = "中共党员";
                  }
                  $("#ceshi1").append(
                       `<tr>
                           <td><h4>${result.args.name}</h4></td>
                           <td><h4>${result.args.id}</h4></td>
                           <td><h4>${result.args.xueyuan}</h4></td>
                           <td><h4>${result.args.zhuanye}</h4></td>
                           <td><h4>${result.args.banji}</h4></td>
                           <td><h4>${result.args.birth}</h4></td>
                           <td><h4>${result.args.telephone}</h4></td>
                           <td><h4>${n}</h4></td>
                              </tr>`);
              } else {
                  console.log(error);
              }
              luru_stu_cha_xiangxi_event.stopWatching();
              });
            }else {
              alert(error);
            }
            }) ;
            });


            var biye_chengjiu = Coursetro.show_biye_stu_chengjiu();
            var stu_cha_biye_chengjiu = $("#stu_cha_biye_chengjiu").hide();
            $("#biye_cha_chengjiu_button").click(function() {
            var account = $("#user").val();

            Coursetro.biye_stu_chengjiu($("#chabiyedizhi").val(),{from:account,gas:1000000 },function(error,result){
            if(!error){
            stu_cha_biye_chengjiu.show();
            biye_chengjiu.watch(function(error, result) {

              if (!error){
                var n ;
                if(result.args.si_liu){
                  n = "四级";
                }
                else {
                  n = "六级";
                }
                    $("#ceshi3").append(
                   `         <tr>
                             <td><h4>${result.args.name}</h4></td>
                             <td><h4>${result.args.id}</h4></td>
                             <td><h4>${n+""}${result.args.siliujichengji}</h4></td>
                             <td><h4>${result.args.chengjiu}</h4></td>
                             </td>
                             </tr>
                             <br>
                                                        `);
              } else {

                  console.log(error);

              }
              biye_chengjiu.stopWatching();
              });
            }else {
              alert(error);
            }
            }) ;
            });

            $("#tea_cha_score_button").click(function() {
            var account = $("#user").val();

            Coursetro.tea_show_stu_score($("#cha_class_score_id").val(),{from:account,gas:1000000 },function(error,result){
            if(!error){
            tea_cha_score_event.watch(function(error, result) {
                      if (!error){
                          var n ;
                            if(result.args.bi_xuan)
                              n = "必修";
                            else
                              n = "选修";
                              $("#show_class_score").append(`<div class="list">
                              <ul>
                              <li>学生名字: ${result.args.stu_name}</li>
                              <li>课程名称: ${result.args.stu_all_class_name}</li>
                              <li>课程编号: ${result.args.stu_all_class_id}</li>
                              <li>课程学分：${result.args.stu_all_class_xuefen}</li>
                              <li>任课老师：${result.args.stu_all_class_tea_name}</li>
                              <li>课程成绩：${result.args._score}</li>
                              <li>课程性质：${n}</li>
                              </ul>
                              </div>`);
              } else {
                  console.log(error);
              }
              tea_cha_score_event.stopWatching();
              });
            }else {
              alert(error);
            }
            }) ;
            });
