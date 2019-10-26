package com.GWC.Advanced1.Semester1;

import java.util.*;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class Semester1Controller {

	
	@GetMapping("/")
	public String home() {
		return "index";
	}
	

}