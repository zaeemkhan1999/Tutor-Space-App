import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/src/widgets/placeholder.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:provider/provider.dart';
import 'package:http/http.dart' as http;
import 'package:tutorez_project/Feature/map/studenthome.dart';
//import 'package:tutorez_project/constant.dart';

// import '../../main.dart';
import '../../secure_storage.dart';
import '../map/tutorhome.dart';
import 'auth_tutor_provider.dart';

class TutorLogin extends StatefulWidget {
  const TutorLogin({super.key});

  @override
  State<TutorLogin> createState() => _TutorLoginState();
}

class _TutorLoginState extends State<TutorLogin> {
  bool _isobscured = true;
  final SecureStorage secureStorage = SecureStorage();
  @override
  Widget build(BuildContext context) {
    final logintutorProvider = Provider.of<AuthTutorProvider>(context);
    void loginStudent() async {
      final url = Uri.parse('http://localhost:3000/student/login');

      // Create a Map with the data you want to send
      var data = {
        'email': logintutorProvider.emailController.text,
        'password': logintutorProvider.passwordController.text,
      };

      // Encode the data as JSON
      var body = jsonEncode(data);

      // Set the headers
      var headers = {
        'Content-Type': 'application/json',
      };
      try {
        final response = await http.post(url, headers: headers, body: body);
        if (response.statusCode == 200) {
          var responseData = jsonDecode(response.body);
          //print(responseData['Login Successful']);
          final token = jsonEncode(responseData['Login Successful']);
          //print(token);
          await secureStorage.writeData('Ttoken', token);
          String? xyz = await secureStorage.readData('Ttoken');
          print(xyz);
          print('Data posted successfully');
          print('Created Tutor data: $responseData');
        } else {
          print('Error posting data: ${response.statusCode}');
        }
      } catch (e) {
        print(e);
      }
      // Send the POST request
    }

    return Scaffold(
      resizeToAvoidBottomInset: false,
      backgroundColor: Colors.white,
      body: SafeArea(
        child: Container(
          // androidlarge12EHR (157:1893)
          padding: EdgeInsets.fromLTRB(20, 81, 19, 0),
          width: double.infinity,
          decoration: BoxDecoration(
            color: Color(0xffffffff),
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              Container(
                // loginHmV (157:2236)
                margin: EdgeInsets.fromLTRB(0, 0, 181, 42),
                child: Text(
                  'Login',
                  style: GoogleFonts.roboto(
                    fontSize: 35,
                    fontWeight: FontWeight.w700,
                    height: 1.1725,
                    color: Color(0xff000000),
                  ),
                ),
              ),
              Container(
                // group198yPR (157:2238)
                margin: EdgeInsets.fromLTRB(10, 0, 12, 49),
                width: double.infinity,
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(15),
                ),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    Container(
                      // group196VsZ (157:2239)
                      margin: EdgeInsets.fromLTRB(0, 0, 0, 20),
                      width: double.infinity,
                      decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(15),
                      ),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Container(
                            // emailp99 (157:2243)
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
                            // group1958fd (157:2240)
                            width: double.infinity,
                            height: 50,
                            decoration: BoxDecoration(
                              borderRadius: BorderRadius.circular(15),
                            ),
                            child: Center(
                              // group83gh9 (157:2241)
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
                                        logintutorProvider.emailController,
                                    decoration: InputDecoration(
                                      border: InputBorder.none,
                                      focusedBorder: InputBorder.none,
                                      enabledBorder: InputBorder.none,
                                      errorBorder: InputBorder.none,
                                      disabledBorder: InputBorder.none,
                                      contentPadding:
                                          EdgeInsets.fromLTRB(19, 13, 129, 15),
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
                    Container(
                      // group197ZW3 (157:2245)
                      width: double.infinity,
                      decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(15),
                      ),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Container(
                            // password6Vy (157:2249)
                            margin: EdgeInsets.fromLTRB(21, 0, 0, 5),
                            child: Text(
                              'Password',
                              style: GoogleFonts.roboto(
                                fontSize: 15,
                                fontWeight: FontWeight.w500,
                                height: 1.1725,
                                color: Color(0xffe56031),
                              ),
                            ),
                          ),
                          Container(
                            // group195pRy (157:2246)
                            width: double.infinity,
                            height: 50,
                            decoration: BoxDecoration(
                              borderRadius: BorderRadius.circular(15),
                            ),
                            child: Center(
                              // group83ms1 (157:2247)
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
                                        logintutorProvider.passwordController,
                                    obscureText: true,
                                    decoration: InputDecoration(
                                      border: InputBorder.none,
                                      focusedBorder: InputBorder.none,
                                      enabledBorder: InputBorder.none,
                                      errorBorder: InputBorder.none,
                                      disabledBorder: InputBorder.none,
                                      contentPadding:
                                          EdgeInsets.fromLTRB(23, 16, 16, 14.4),
                                      hintStyle: const TextStyle(
                                          color: Color(0xFFFF9773)),
                                      hintText: 'Enter your password',
                                      prefixIcon: const Icon(
                                        Icons.key,
                                        color: Color(0xffe56031),
                                      ),
                                      suffixIcon: IconButton(
                                        icon: _isobscured
                                            ? const Icon(
                                                Icons.visibility,
                                                color: Color(0xFFFF9773),
                                              )
                                            : const Icon(
                                                Icons.visibility_off,
                                                color: Color(0xFFFF9773),
                                              ),
                                        onPressed: () {
                                          setState(() {
                                            _isobscured = !_isobscured;
                                          });
                                        },
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
                // group87efu (157:2232)
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
                    ),
                    child: TextButton(
                      // group83APM (157:2233)
                      onPressed: () {
                        loginStudent();
                        logintutorProvider.login();
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
                                builder: (context) => TutorHome()));
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
                            'Login ',
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
                // donthaveanstudentaccountsignup (157:2255)
                margin: EdgeInsets.fromLTRB(0, 0, 1, 36.67),
                child: TextButton(
                  onPressed: () {},
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
                          text: 'Don’t have a tutor account? ',
                        ),
                        TextSpan(
                          text: 'Sign Up',
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
                  // width: 267,
                  // height: 100,
                  child: Image.asset(
                    "assets/Group 193.png",
                    // height: MediaQuery.of(context).size.height,
                    // width: MediaQuery.of(context).size.width,
                    // fit: BoxFit.cover,
                    // width: 367,
                    // height: 100,
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
