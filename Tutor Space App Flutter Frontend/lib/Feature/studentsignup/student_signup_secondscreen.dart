import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/src/widgets/placeholder.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:provider/provider.dart';
import 'package:tutorez_project/Feature/studentlogin/student_login.dart';
import 'package:tutorez_project/Feature/studentsignup/studentsignup_provider.dart';
import 'package:http/http.dart' as http;

class StudentSignupSecondScreen extends StatefulWidget {
  const StudentSignupSecondScreen({super.key});

  @override
  State<StudentSignupSecondScreen> createState() =>
      _StudentSignupSecondScreenState();
}

class _StudentSignupSecondScreenState extends State<StudentSignupSecondScreen> {
  bool _isobscured = true;

  @override
  Widget build(BuildContext context) {
    final signupProviderOne = Provider.of<StudentSignupProvider>(context);
    void postSignupStudent() async {
      final url = Uri.parse('http://10.0.2.2:3000/student/signup');

      // Create a Map with the data you want to send
      var data = {
        'name': signupProviderOne.nameController.text,
        'email': signupProviderOne.emailController.text,
        'address': signupProviderOne.addressController.text,
        'age': 25,
        'longitude': null,
        'latitude': null,
        'contact_number': signupProviderOne.contactController.text,
        'password': signupProviderOne.passwordController.text,
      };

      // Encode the data as JSON
      var body = jsonEncode(data);

      // Set the headers
      var headers = {
        'Content-Type': 'application/json',
      };
      try {
        final response = await http.post(url, headers: headers, body: body);
        if (response.statusCode == 201) {
          var responseData = jsonDecode(response.body);
          print('Data posted successfully');
          print('Created student data: $responseData');
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
          // androidlarge6qoy (39:21700)
          padding: EdgeInsets.fromLTRB(20, 41, 19, 0),
          width: double.infinity,
          decoration: BoxDecoration(
            color: Color(0xffffffff),
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              Container(
                // signupJBm (39:22043)
                margin: EdgeInsets.fromLTRB(0, 0, 147, 32),
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
                // group198z4b (39:22045)
                margin: EdgeInsets.fromLTRB(10, 0, 12, 27),
                width: double.infinity,
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(15),
                ),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    Container(
                      // group196hzb (39:22046)
                      width: double.infinity,
                      decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(15),
                      ),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Container(
                            // password4KM (39:22050)
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
                            // group195AtB (39:22047)
                            width: double.infinity,
                            height: 50,
                            decoration: BoxDecoration(
                              borderRadius: BorderRadius.circular(15),
                            ),
                            child: Center(
                              // group838KD (39:22048)
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
                                        signupProviderOne.passwordController,
                                    obscureText: _isobscured,
                                    decoration: InputDecoration(
                                      border: InputBorder.none,
                                      focusedBorder: InputBorder.none,
                                      enabledBorder: InputBorder.none,
                                      errorBorder: InputBorder.none,
                                      disabledBorder: InputBorder.none,
                                      contentPadding: EdgeInsets.fromLTRB(
                                          23, 17, 16, 14.74),
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
                    SizedBox(
                      height: 20,
                    ),
                    Container(
                      // group197aS7 (39:22055)
                      width: double.infinity,
                      decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(15),
                      ),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Container(
                            // confirmpasswordiHR (39:22059)
                            margin: EdgeInsets.fromLTRB(21, 0, 0, 5),
                            child: Text(
                              'Confirm password',
                              style: GoogleFonts.roboto(
                                fontSize: 15,
                                fontWeight: FontWeight.w500,
                                height: 1.1725,
                                color: Color(0xffe56031),
                              ),
                            ),
                          ),
                          Container(
                            // group195RxX (39:22056)
                            width: double.infinity,
                            height: 50,
                            decoration: BoxDecoration(
                              borderRadius: BorderRadius.circular(15),
                            ),
                            child: Center(
                              // group83nYB (39:22057)
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
                                    controller: signupProviderOne
                                        .confirmPasswordController,
                                    obscureText: _isobscured,
                                    decoration: InputDecoration(
                                      border: InputBorder.none,
                                      focusedBorder: InputBorder.none,
                                      enabledBorder: InputBorder.none,
                                      errorBorder: InputBorder.none,
                                      disabledBorder: InputBorder.none,
                                      contentPadding:
                                          EdgeInsets.fromLTRB(23, 16, 16, 13.4),
                                      hintStyle: const TextStyle(
                                          color: Color(0xFFFF9773)),
                                      hintText: 'Confirm your password',
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
                    SizedBox(
                      height: 20,
                    ),
                    Container(
                      // group198f6B (39:22061)
                      width: double.infinity,
                      decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(15),
                      ),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Container(
                            // address1vj (39:22065)
                            margin: EdgeInsets.fromLTRB(21, 0, 0, 5),
                            child: Text(
                              'Address',
                              style: GoogleFonts.roboto(
                                fontSize: 15,
                                fontWeight: FontWeight.w500,
                                height: 1.1725,
                                color: Color(0xffe56031),
                              ),
                            ),
                          ),
                          Container(
                            // group195wZV (39:22062)
                            width: double.infinity,
                            height: 50,
                            decoration: BoxDecoration(
                              borderRadius: BorderRadius.circular(15),
                            ),
                            child: Center(
                              // group83Vqu (39:22063)
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
                                        signupProviderOne.addressController,
                                    decoration: InputDecoration(
                                      border: InputBorder.none,
                                      focusedBorder: InputBorder.none,
                                      enabledBorder: InputBorder.none,
                                      errorBorder: InputBorder.none,
                                      disabledBorder: InputBorder.none,
                                      contentPadding: EdgeInsets.fromLTRB(
                                          24, 15, 112, 14.79),
                                      hintStyle: const TextStyle(
                                          color: Color(0xFFFF9773)),
                                      hintText: 'Enter your Address',
                                      prefixIcon: const Icon(
                                        Icons.location_on,
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
                margin: EdgeInsets.fromLTRB(10, 0, 12, 10),
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
                  onPressed: () {
                    postSignupStudent();
                    signupProviderOne.signup();
                    Navigator.of(context).push(MaterialPageRoute(
                        builder: (context) => const StudentLogin()));
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
                        'Sign Up',
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
              Container(
                // alreadyhaveastudentaccountlogi (39:22070)
                margin: EdgeInsets.fromLTRB(0, 0, 0, 15.67),
                child: TextButton(
                  onPressed: () {
                    Navigator.of(context).push(MaterialPageRoute(
                        builder: (context) => const StudentLogin()));
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
                          text: 'Already have a Student account? ',
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
