exports.responseData = ({ res, statusCode,success,message, data, error }) => {
	const resultObj = {
		success:success,
		message:message,
		data: data,
		error: error
	};
	return res.status(statusCode).send(resultObj);
};

exports.responseMessage ={
	NO_USER:"No user Found",
	LOGIN_ERROR:"Error in Logging",
	REGISTER_ERROR :"Error in Registeration",
	INVALID_INPUT : "Invalid request",
	USER_EXIST:"User Already Exist",
	REGISTER_SUCCESS : "User registered successfully",
	LOGIN_SUCCESS: "User login successfully",
	SOMETHING_WRONG : "Something went wrong",
	PASSWORD_NOT_MATCH:"Passowrd not match",
	PASSWORD_CHANGE_SUCCESS:"Password Changed Success"
}