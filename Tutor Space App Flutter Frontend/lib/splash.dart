import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:tutorez_project/demo.dart';
import 'dart:math' as math;
import 'login_option_screen.dart';

class Splash extends StatefulWidget {
  const Splash({Key? key}) : super(key: key);

  @override
  State<Splash> createState() => _SplashState();
}

class _SplashState extends State<Splash> with TickerProviderStateMixin {
  late Animation<double> animation;
  late AnimationController controller;
  late Tween<double> turnsTween;
  late Animation<double> anim;
  late AnimationController controller1;

  @override
  dispose() {
    controller.dispose();
    controller1.dispose(); // you need this
    super.dispose();
  }

  @override
  void initState() {
    super.initState();
    controller = AnimationController(
      duration: const Duration(seconds: 1),
      vsync: this,
    )..repeat(reverse: true);
    controller1 = AnimationController(
      duration: const Duration(seconds: 2),
      vsync: this,
    )..repeat(reverse: true);

    // animation = Tween<double>(begin: 0, end: 200).animate(controller);
    final alpha = CurvedAnimation(parent: controller, curve: Curves.linear);
    //animation = CurvedAnimation(parent: controller, curve: Curves.linear);
    animation = Tween<double>(begin: 0, end: 200).animate(alpha);
    turnsTween = Tween<double>(
      begin: 2,
      end: 0,
    );
    anim = turnsTween.animate(controller1);
    anim.addStatusListener((status) {
      print(status);
      if (status == AnimationStatus.completed) {
        turnsTween = Tween<double>(
          begin: 0,
          end: 2,
        );
        controller1.reverse();
      }
    });
    animation.addStatusListener((status) {
      print(status);
      // if (status == AnimationStatus.completed) {
      //   controller.reverse();//add a bool variable
      // }
      if (status == AnimationStatus.dismissed) {
        controller.forward();
      }
    });
    controller.forward();
    Future.delayed(Duration(seconds: 4), _toNextScreen);
  }

  _toNextScreen() {
    Navigator.of(context).push(
      MaterialPageRoute(builder: (context) => const LoginOptionScreen()),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Stack(
              alignment: Alignment.center,
              children: <Widget>[
                RotationTransition(
                    turns: anim, child: AnimatedLogo(animation: animation)),
                Image.asset('assets/Group 1.png'),
              ],
            ),
          ],
        ),
      ),
    );
  }
}

class AnimatedLogo extends AnimatedWidget {
  const AnimatedLogo({
    Key? key,
    required Animation<double> animation,
  }) : super(key: key, listenable: animation);

  @override
  Widget build(BuildContext context) {
    final Animation<double> animation = listenable as Animation<double>;
    return Transform.rotate(
      angle: animation.value * math.pi,
      //child: const FlutterLogo(size: 200),
    );
  }
}
