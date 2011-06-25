/**
 * User: Martin Strandbygaard
 * Date: 21-06-11
 * See http://www.withings.com/en/api/bodyscale
 */

var withings = function () {
    "use strict";

    var userid, publickey, url, api;

    url = "http://wbsapi.withings.net/";

    api = {
        services: {
            account: {
                name: "account",
                actions: {
                    getUsersList: {
                        name: "getuserslist",
                        parameters: {
                            userId: {
                                name: "userid",
                                required: true
                            },
                            publicKey : {
                                name: "publickey",
                                required: true
                            }
                        }
                    }
                }
            },
            measure: {
                name: "measure",
                actions: {
                    getMeasurement: {
                        name: "getmeas",
                        parameters: {
                            userId: {
                                name: "userid",
                                required: true
                            },
                            publicKey : {
                                name: "publickey",
                                required: true
                            },
                            startDate: {
                                name: "startdate",
                                required: false
                            },
                            endDate: {
                                name: "enddate",
                                required: false
                            },
                            devType: {
                                name: "devtype",
                                required: false
                            },
                            measType: {
                                name: "meastype",
                                required: false
                            },
                            lastUpdate: {
                                name: "lastupdate",
                                required: false
                            },
                            category: {
                                name: "category",
                                required: false
                            },
                            limit: {
                                name: "limit",
                                required: false
                            },
                            offset: {
                                name: "offset",
                                required: false
                            }
                        }
                    }
                }
            },
            notify: {
                name: "notify",
                actions: {
                    subscribe: {
                        name: "subscribe",
                        parameters: {
                            userId: {
                                name: "userid",
                                required: true
                            },
                            publicKey : {
                                name: "publickey",
                                required: true
                            },
                            callbackUrl: {
                                name: "callbackurl",
                                required: true
                            },
                            comment: {
                                name: "comment",
                                required: true
                            },
                            appli: {
                                name: "appli",
                                required: false
                            }
                        }
                    },
                    revoke: {
                        name: "revoke",
                        parameters: {
                            userId: {
                                name: "userid",
                                required: true
                            },
                            publicKey : {
                                name: "publickey",
                                required: true
                            },
                            callbackUrl: {
                                name: "callbackUrl",
                                required: true
                            },
                            appli: {
                                name: "appli",
                                required: false
                            }
                        }
                    },
                    get: {
                        name: "get",
                        parameters: {
                            userId: {
                                name: "userid",
                                required: true
                            },
                            publicKey : {
                                name: "publickey",
                                required: true
                            },
                            callbackUrl: {
                                name: "callbackUrl",
                                required: true
                            },
                            appli: {
                                name: "appli",
                                required: false
                            }
                        }
                    }
                }
            },
            once: {
                name: "once",
                actions: {
                    get: {

                        name: "get",
                        parameters: {
                        }
                    }
                }
            },
            user: {
                name: "user",
                actions: {
                    getUserById: {
                        name: "getuserbyid",
                        parameters: {
                            email: {
                                name: "email",
                                required: true
                            },
                            hash: {
                                name: "hash",
                                required: true
                            }
                        }
                    },
                    update: {
                        name: "update",
                        parameters: {
                            userId: {
                                name: "userid",
                                required: true
                            },
                            publicKey: {
                                name: "publickey",
                                required: true
                            },
                            isPublic: {
                                name: "ispublic",
                                required: true
                            }
                        }
                    }
                }
            }
        }
    };

    var set_userid = function(uid) {
        userid = String(uid);
    };

    var set_publickey = function(key) {
        publickey = String(key);
    };

    var getUsersList = function() {

    };

    var init = function(uid, key) {
        set_userid(uid);
        set_publickey(key);
    }

    var initialized = function() {
        if (!userid || !publickey) {
            return false;
        }

        if (userid.length == 0 || userid == "") {
            return false;
        }

        if (publickey.length == 0 || publickey == "") {
            return false;
        }

        return true;
    }

    var getUsers;
    getUsers = function() {
        function ProcessRequest() {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                if (xmlHttp.responseText == "Not found") {
                    Console.log("Not found");
                }
                else {
                    var info = eval("(" + xmlHttp.responseText + ")");
                    Console.log(info.jsonData[ 0 ].cmname);
                }
            }
        }

        //http://wbsapi.withings.net/account?action=getuserslist&email=demo@withings.com&hash=a1e72bfe9e22c9930a0046e5363c6efa
        //1. http://wbsapi.withings.net/once?action=get
        var xmlHttp, onceUrl;
        xmlHttp = null;
        onceUrl = "http://www.google.dk";
//        onceUrl = "http://wbsapi.withings.net/once?action=get";

        xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = ProcessRequest;
        xmlHttp.open("GET", onceUrl, false);
        xmlHttp.send(null);
        //2. Step 2: Make a string which is the concatenation of the lowercased email address, the MD5 hash of the
        // password and the once separated with ":". Please note that all email addresses are supposed to be lowercase
        // during the whole authentication and hashing process. In other words, you must lowercase any email address
        // before using it, since the MD5 hashes of doe@domain.com and Doe@domain.com are different and hence will lead
        // to authentication errors when trying to access the API.
        Crypto.MD5();
        // Step 3: Using, once again, your usual MD5 library, compute the MD5 of the string obtained in step 2.
        // Step 4: Use a hexadecimal representation of the result of the MD5 hash as the hash parameter of the
        // WBSAPI service.
        // http://wbsapi.withings.net/account?action=getuserslist&email=demo@withings.com&hash=99eb3bc8555ca782fa4a0fda53bc8a1a
    };


    // The public API of this wrapper API
    return {
        init: init,
        initialized: initialized,
        getUsers: getUsers

    };
}();