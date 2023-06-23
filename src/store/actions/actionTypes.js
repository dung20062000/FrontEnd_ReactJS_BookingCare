const actionTypes = Object.freeze({
    //app
    APP_START_UP_COMPLETE: "APP_START_UP_COMPLETE",
    SET_CONTENT_OF_CONFIRM_MODAL: "SET_CONTENT_OF_CONFIRM_MODAL",
    CHANGE_LANGUAGE: "CHANGE_LANGUAGE",

    //user
    ADD_USER_SUCCESS: "ADD_USER_SUCCESS",
    USER_LOGIN_SUCCESS: "USER_LOGIN_SUCCESS",
    USER_LOGIN_FAIL: "USER_LOGIN_FAIL",
    PROCESS_LOGOUT: "PROCESS_LOGOUT",

    //admin
    FETCH_GENDER_START: "FETCH_GENDER_START",
    FETCH_GENDER_SUCCESS: "FETCH_GENDER_SUCCESS",
    FETCH_GENDER_FAILDED: "FETCH_GENDER_FAILDED",

    //position
    FETCH_POSITION_SUCCESS: "FETCH_POSITION_SUCCESS",
    FETCH_POSITION_FAILDED: "FETCH_POSITION_FAILDED",

    //ROLE
    FETCH_ROLE_SUCCESS: "FETCH_ROLE_SUCCESS",
    FETCH_ROLE_FAILDED: "FETCH_ROLE_FAILDED",

    //save User
    CREATE_USER_SUCCESS: "CREATE_USER_SUCCESS",
    CREATE_USER_FAILDED: "CREATE_USER_FAILDED",
    //delete User
    DELETE_USER_SUCCESS: "DELETE_USER_SUCCESS",
    DELETE_USER_FAILDED: "DELETE_USER_FAILDED",
    //edit User
    EDIT_USER_SUCCESS: "EDIT_USER_SUCCESS",
    EDIT_USER_FAILDED: "EDIT_USER_FAILDED",

    FETCH_ALL_USER_SUCCESS: "FETCH_ALL_USER_SUCCESS",
    FETCH_ALL_USER_FAILDED: "FETCH_ALL_USER_FAILDED",
    
    //TOP DOCTOR
    FETCH_TOP_DOCTOR_SUCCESS: "FETCH_TOP_DOCTOR_SUCCESS",
    FETCH_TOP_DOCTOR_FAILDED: "FETCH_TOP_DOCTOR_FAILDED",

    //All Doctors
    FETCH_ALL_DOCTOR_SUCCESS: "FETCH_ALL_DOCTOR_SUCCESS",
    FETCH_ALL_DOCTOR_FAILDED: "FETCH_ALL_DOCTOR_FAILDED",

    //save detail Doctors
    SAVE_DETAIL_DOCTOR_SUCCESS: "SAVE_DETAIL_DOCTOR_SUCCESS",
    SAVE_DETAIL_DOCTOR_FAILDED: "SAVE_DETAIL_DOCTOR_FAILDED",

    //ALL CODE HOUR
    FETCH_ALL_CODE_TIME_SUCCESS: "FETCH_ALL_CODE_TIME_SUCCESS",
    FETCH_ALL_CODE_TIME_FAILDED: "FETCH_ALL_CODE_TIME_FAILDED",

    //ALL require doctor info
    FETCH_REQUIRE_DOCTOR_INFO_START: "FETCH_REQUIRE_DOCTOR_INFO_START",
    FETCH_REQUIRE_DOCTOR_INFO_SUCCESS: "FETCH_REQUIRE_DOCTOR_INFO_SUCCESS",
    FETCH_REQUIRE_DOCTOR_INFO_FAILDED: "FETCH_REQUIRE_DOCTOR_INFO_FAILDED",


    

    
});

export default actionTypes;
