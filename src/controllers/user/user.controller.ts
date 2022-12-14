import { NextFunction, Request, Response } from "express";
import { check } from "express-validator";
import { apiOk, apiValidation, catchAsync } from "../../util/apiHelpers";
import { emailSignupService, emailSigninService, forgotPasswordService, verifyEmailService } from "../../services/user";

export const emailSignup = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    await check("firstname", "Firstname is not valid").isString().run(req);
    await check("lastname", "Lastname is not valid").isString().run(req);
    await check("email", "Email is not valid").isEmail().run(req);
    await check("password", "Password must be at least 8 characters long").isLength({ min: 8 }).run(req);

    apiValidation(req, res);
    const result = await emailSignupService(req, res, next);
    apiOk(res, result);
});

export const emailSignin = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    await check("email", "Email is not valid").isEmail().run(req);

    apiValidation(req, res);
    const result = await emailSigninService(req, res, next);
    apiOk(res, result);
});

export const forgotPassword = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    await check("email", "Email is not valid").isEmail().run(req);

    apiValidation(req, res);
    const result = await forgotPasswordService(req, res, next);
    apiOk(res, result);
});

export const verifyEmail = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    await check("email", "Email is not valid").isEmail().run(req);

    apiValidation(req, res);
    const result = await verifyEmailService(req, res, next);
    apiOk(res, result);
});

export const resendVerifyEmail = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    // await check("email", "Email is not valid").isEmail().run(req);

    // apiValidation(req, res);
    // const result = await emailSigninService(req, res, next);
    // apiOk(res, result);
});

export const changePassword = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    // await check("email", "Email is not valid").isEmail().run(req);

    // apiValidation(req, res);
    // const result = await emailSigninService(req, res, next);
    // apiOk(res, result);
});

export const resetPassword = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    // await check("email", "Email is not valid").isEmail().run(req);

    // apiValidation(req, res);
    // const result = await emailSigninService(req, res, next);
    // apiOk(res, result);
});