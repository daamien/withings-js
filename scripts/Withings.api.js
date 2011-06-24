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

    var getUser = function() {
    }

    // The public API of this wrapper API
    return {
        init: init,
        initialized: initialized,
        getUser: getUser

    };
}();