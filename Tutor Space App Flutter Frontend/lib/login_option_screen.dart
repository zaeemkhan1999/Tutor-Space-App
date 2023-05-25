import 'package:flutter/material.dart';
import 'package:tutorez_project/Feature/studentlogin/student_login.dart';
import 'package:tutorez_project/Feature/studentsignup/student_signup_firstscreen.dart';

import 'Feature/tutor/tutor_login.dart';
import 'Feature/tutor/tutor_signup_firstscreen.dart';
//import 'package:tutorez_project/tutor/tutor_login.dart';
//import 'package:tutorez_project/tutor/tutor_signup_firstscreen.dart';

class LoginOptionScreen extends StatefulWidget {
  const LoginOptionScreen({Key? key}) : super(key: key);
  @override
  State<LoginOptionScreen> createState() => _LoginOptionScreenState();
}

class _LoginOptionScreenState extends State<LoginOptionScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      resizeToAvoidBottomInset: false,
      body: SafeArea(
        child: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            //crossAxisAlignment: CrossAxisAlignment.end,
            children: [
              Image.asset(
                'assets/Group 1.png',
                scale: 1.0,
              ),
              const SizedBox(
                height: 245,
              ),
              ElevatedButton(
                onPressed: () {
                  Navigator.of(context).push(MaterialPageRoute(
                      builder: (context) => const StudentLogin()));
                },
                style: ElevatedButton.styleFrom(
                    backgroundColor: const Color(0xFF004643),
                    fixedSize: const Size(300, 40),
                    shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(10))),
                child: const Text(
                  'Login as Student',
                  style: TextStyle(fontSize: 18, color: Colors.white),
                ),
              ),
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  const Text(
                    'Don’t have an Student account?',
                    style: TextStyle(fontWeight: FontWeight.bold),
                  ),
                  TextButton(
                      onPressed: () {
                        //add sign up page for collector
                        Navigator.of(context).push(MaterialPageRoute(
                            builder: (context) =>
                                const StudentSignupFirstScreen()));
                      },
                      child: const Text(
                        'Sign Up',
                        style: TextStyle(color: Color(0xFFF9BC60)),
                      ))
                ],
              ),
              ElevatedButton(
                  onPressed: () {
                    Navigator.of(context).push(
                        // MaterialPageRoute(
                        //   builder: (context) => StreamBuilder<User?>(
                        //       stream: FirebaseAuth.instance.authStateChanges(),
                        //       builder: (context, snapshot) {
                        //         if (snapshot.hasData) {
                        //           return MainScreen(); //MapLoader(); //if the user is logged in show home page
                        //         } else {
                        //           return LoginDonor(); // else show login page
                        //         }
                        //       }),
                        // ),
                        MaterialPageRoute(
                            builder: (context) => const TutorLogin()));
                  },
                  style: ElevatedButton.styleFrom(
                      backgroundColor: const Color(0xFF004643),
                      fixedSize: const Size(300, 40),
                      shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(10))),
                  child: const Text(
                    'Login as Tutor',
                    style: TextStyle(fontSize: 18, color: Colors.white),
                  )),
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  const Text(
                    'Don’t have a tutor account?',
                    style: TextStyle(fontWeight: FontWeight.bold),
                  ),
                  TextButton(
                      onPressed: () {
                        Navigator.of(context).push(
                          MaterialPageRoute(
                              builder: (context) =>
                                  const TutorSignUpFirstScreen()),
                        );
                      },
                      child: const Text(
                        'Sign Up',
                        style: TextStyle(color: Color(0xFFF9BC60)),
                      ))
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }
}
