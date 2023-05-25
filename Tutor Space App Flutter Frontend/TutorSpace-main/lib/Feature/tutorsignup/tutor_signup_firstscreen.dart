import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/src/widgets/placeholder.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:provider/provider.dart';
import 'package:tutorez_project/Feature/studentlogin/student_login.dart';
import 'package:tutorez_project/Feature/studentsignup/student_signup_secondscreen.dart';
import 'package:tutorez_project/Feature/tutorsignup/tutor_signup_secondscreen.dart';
import 'package:tutorez_project/Feature/tutorsignup/tutorsignup_provider.dart';

import '../tutor/tutor_login.dart';

class TutorSignupFirstScreen extends StatefulWidget {
  const TutorSignupFirstScreen({super.key});

  @override
  State<TutorSignupFirstScreen> createState() => _TutorSignupFirstScreenState();
}

class _TutorSignupFirstScreenState extends State<TutorSignupFirstScreen> {
  @override
  Widget build(BuildContext context) {
    final signupProvider = Provider.of<TutorSignupProvider>(context);
    return Scaffold(
      resizeToAvoidBottomInset: false,
      backgroundColor: Colors.white,
      body: SafeArea(
        child: Container(
          padding: EdgeInsets.fromLTRB(20, 41, 19, 0),
          height: MediaQuery.of(context).size.height,
          width: MediaQuery.of(context).size.width,
          decoration: BoxDecoration(
            color: Color(0xffffffff),
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              Container(
                // signupEC3 (38:14962)
                margin: EdgeInsets.fromLTRB(0, 0, 150, 20),
                child: Text(
                  'Sign Up',
                  style: GoogleFonts.roboto(
                    fontSize: 35,
                    fontWeight: FontWeight.w700,
                    height: 1.1725,
                    color: Color(0xff000000),
                  ),
                ),
              ),
              Container(
                // group1987Fq (38:14964)
                margin: EdgeInsets.fromLTRB(10, 0, 12, 27),
                width: double.infinity,
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    Container(
                      // group196ErF (38:14965)
                      width: double.infinity,
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Container(
                            // namePj9 (38:14969)
                            margin: EdgeInsets.fromLTRB(21, 0, 0, 5),
                            child: Text(
                              'Name',
                              style: GoogleFonts.roboto(
                                fontSize: 15,
                                fontWeight: FontWeight.w500,
                                height: 1.1725,
                                color: Color(0xffe56031),
                              ),
                            ),
                          ),
                          Container(
                            // group195WYs (38:14966)
                            width: double.infinity,
                            height: 50,
                            decoration: BoxDecoration(
                              borderRadius: BorderRadius.circular(15),
                            ),
                            child: Center(
                              // group833Yo (38:14967)
                              child: SizedBox(
                                width: double.infinity,
                                height: double.infinity,
                                child: Container(
                                  decoration: BoxDecoration(
                                    borderRadius: BorderRadius.circular(15),
                                    border:
                                        Border.all(color: Color(0xffe56031)),
                                    color: Color(0xffffffff),
                                  ),
                                  child: TextField(
                                    controller: signupProvider.nameController,
                                    decoration: InputDecoration(
                                      border: InputBorder.none,
                                      focusedBorder: InputBorder.none,
                                      enabledBorder: InputBorder.none,
                                      errorBorder: InputBorder.none,
                                      disabledBorder: InputBorder.none,
                                      contentPadding:
                                          EdgeInsets.fromLTRB(20, 14, 128, 13),
                                      hintStyle: const TextStyle(
                                          color: Color(0xFFFF9773)),
                                      hintText: 'Enter your name',
                                      prefixIcon: const Icon(
                                        Icons.person,
                                        color: Color(0xffe56031),
                                      ),
                                    ),
                                  ),
                                ),
                              ),
                            ),
                          ),
                        ],
                      ),
                    ),
                    SizedBox(
                      height: 20,
                    ),
                    Container(
                      // group197TMd (38:14974)
                      width: double.infinity,
                      decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(15),
                      ),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Container(
                            // contactnumberAWw (38:14978)
                            margin: EdgeInsets.fromLTRB(21, 0, 0, 5),
                            child: Text(
                              'Contact number',
                              style: GoogleFonts.roboto(
                                fontSize: 15,
                                fontWeight: FontWeight.w500,
                                height: 1.1725,
                                color: Color(0xffe56031),
                              ),
                            ),
                          ),
                          Container(
                            // group195sw9 (38:14975)
                            width: double.infinity,
                            height: 50,
                            decoration: BoxDecoration(
                              borderRadius: BorderRadius.circular(15),
                            ),
                            child: Center(
                              // group832p3 (38:14976)
                              child: SizedBox(
                                width: double.infinity,
                                height: double.infinity,
                                child: Container(
                                  decoration: BoxDecoration(
                                    borderRadius: BorderRadius.circular(15),
                                    border:
                                        Border.all(color: Color(0xffe56031)),
                                    color: Color(0xffffffff),
                                  ),
                                  child: TextField(
                                    controller:
                                        signupProvider.contactController,
                                    decoration: InputDecoration(
                                      border: InputBorder.none,
                                      focusedBorder: InputBorder.none,
                                      enabledBorder: InputBorder.none,
                                      errorBorder: InputBorder.none,
                                      disabledBorder: InputBorder.none,
                                      contentPadding:
                                          EdgeInsets.fromLTRB(24, 14, 60, 11),
                                      hintStyle: const TextStyle(
                                          color: Color(0xFFFF9773)),
                                      hintText: 'Enter your number',
                                      prefixIcon: const Icon(
                                        Icons.phone,
                                        color: Color(0xffe56031),
                                      ),
                                    ),
                                  ),
                                ),
                              ),
                            ),
                          ),
                        ],
                      ),
                    ),
                    SizedBox(
                      height: 20,
                    ),
                    Container(
                      // group198ucw (39:15351)
                      width: double.infinity,
                      decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(15),
                      ),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Container(
                            // emailTuM (39:15355)
                            margin: EdgeInsets.fromLTRB(21, 0, 0, 5),
                            child: Text(
                              'Email',
                              style: GoogleFonts.roboto(
                                fontSize: 15,
                                fontWeight: FontWeight.w500,
                                height: 1.1725,
                                color: Color(0xffe56031),
                              ),
                            ),
                          ),
                          Container(
                            // group195PHD (39:15352)
                            width: double.infinity,
                            height: 50,
                            decoration: BoxDecoration(
                              borderRadius: BorderRadius.circular(15),
                            ),
                            child: Center(
                              // group837j1 (39:15353)
                              child: SizedBox(
                                width: double.infinity,
                                height: double.infinity,
                                child: Container(
                                  decoration: BoxDecoration(
                                    borderRadius: BorderRadius.circular(15),
                                    border:
                                        Border.all(color: Color(0xffe56031)),
                                    color: Color(0xffffffff),
                                  ),
                                  child: TextField(
                                    controller: signupProvider.emailController,
                                    decoration: InputDecoration(
                                      border: InputBorder.none,
                                      focusedBorder: InputBorder.none,
                                      enabledBorder: InputBorder.none,
                                      errorBorder: InputBorder.none,
                                      disabledBorder: InputBorder.none,
                                      contentPadding:
                                          EdgeInsets.fromLTRB(19, 13, 74, 15),
                                      hintStyle: const TextStyle(
                                          color: Color(0xFFFF9773)),
                                      hintText: 'Enter your email',
                                      prefixIcon: const Icon(
                                        Icons.email_outlined,
                                        color: Color(0xffe56031),
                                      ),
                                    ),
                                  ),
                                ),
                              ),
                            ),
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
              ),
              Container(
                // group87ymD (38:14958)
                margin: EdgeInsets.fromLTRB(10, 0, 12, 10),
                child: TextButton(
                  onPressed: () {},
                  style: TextButton.styleFrom(
                    padding: EdgeInsets.zero,
                  ),
                  child: Container(
                    width: double.infinity,
                    height: 50,
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(15),
                      boxShadow: [
                        BoxShadow(
                          color: Color(0x3f000000),
                          offset: Offset(0, 0),
                          blurRadius: 5,
                        ),
                      ],
                    ),
                    child: TextButton(
                      // group83ecT (38:14959)
                      onPressed: () {
                        signupProvider.signup();
                        Navigator.of(context).push(
                            //     // MaterialPageRoute(
                            //     //   builder: (context) => StreamBuilder<User?>(
                            //     //       stream: FirebaseAuth.instance.authStateChanges(),
                            //     //       builder: (context, snapshot) {
                            //     //         if (snapshot.hasData) {
                            //     //           return MainScreen(); //MapLoader(); //if the user is logged in show home page
                            //     //         } else {
                            //     //           return SignupNgo(); // else show login page
                            //     //         }
                            //     //       }),
                            //     // ),
                            MaterialPageRoute(
                                builder: (context) =>
                                    const TutorSignupSecondScreen()));
                      },
                      style: TextButton.styleFrom(
                        padding: EdgeInsets.zero,
                      ),
                      child: Container(
                        width: double.infinity,
                        height: double.infinity,
                        decoration: BoxDecoration(
                          color: Color(0xff004643),
                          borderRadius: BorderRadius.circular(15),
                        ),
                        child: Center(
                          child: Text(
                            'Next ',
                            style: GoogleFonts.roboto(
                              fontSize: 20,
                              fontWeight: FontWeight.w700,
                              height: 1.1725,
                              color: Color(0xfffffffe),
                            ),
                          ),
                        ),
                      ),
                    ),
                  ),
                ),
              ),
              Container(
                // alreadyhaveastudentaccountlogi (38:14984)
                margin: EdgeInsets.fromLTRB(0, 0, 8, 15.67),
                child: TextButton(
                  onPressed: () {
                    Navigator.of(context).push(
                        //     // MaterialPageRoute(
                        //     //   builder: (context) => StreamBuilder<User?>(
                        //     //       stream: FirebaseAuth.instance.authStateChanges(),
                        //     //       builder: (context, snapshot) {
                        //     //         if (snapshot.hasData) {
                        //     //           return MainScreen(); //MapLoader(); //if the user is logged in show home page
                        //     //         } else {
                        //     //           return SignupNgo(); // else show login page
                        //     //         }
                        //     //       }),
                        //     // ),
                        MaterialPageRoute(
                            builder: (context) => const TutorLogin()));
                  },
                  style: TextButton.styleFrom(
                    padding: EdgeInsets.zero,
                  ),
                  child: RichText(
                    text: TextSpan(
                      style: GoogleFonts.roboto(
                        fontSize: 15,
                        fontWeight: FontWeight.w400,
                        height: 1.1725,
                        color: Color(0xff004643),
                      ),
                      children: [
                        TextSpan(
                          text: 'Already have a Tutor account? ',
                        ),
                        TextSpan(
                          text: 'Login',
                          style: GoogleFonts.roboto(
                            fontSize: 15,
                            fontWeight: FontWeight.w700,
                            height: 1.1725,
                            color: Color(0xffe56031),
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
              ),
              Expanded(
                child: Container(
                  height: MediaQuery.of(context).size.height,
                  width: MediaQuery.of(context).size.width,
                  child: Image.asset(
                    "assets/Group 193.png",
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
