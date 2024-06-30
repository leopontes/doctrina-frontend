import { Component, OnInit } from '@angular/core';
import { AbstractControl, AbstractControlOptions, AsyncValidatorFn, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-registration',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  
  step = 1;

  formDadosPessoais: FormGroup;
  formDadosPagamento!: FormGroup;

  passwordCheck: boolean = false;

  constructor(private formBuilder: FormBuilder) { 
    this.formDadosPessoais = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(90)]],
      email: ['', [Validators.required, Validators.maxLength(90), Validators.email]],
      password: ['', [Validators.required, Validators.min(8), Validators.max(8) ]],
      confirmPassword: ['', [Validators.required, Validators.min(8), Validators.max(8) ]]
    }, {
      validator: this.passwordMatch(),
    });

    this.formDadosPagamento = this.formBuilder.group({
      plan: ['', [Validators.required]],
      cardNumber: [''],
      expiryDate: [''],
      cvv: [''],
      agreedToTerms: ['', [Validators.required, Validators.requiredTrue]]
    });
  } 

  ngOnInit(): void {
    
  }

  nextStep() {

    if(this.formDadosPessoais.value.password !== this.formDadosPessoais.value.confirmPassword){
      alert('senhas diferentes')
    }

    if(this.formDadosPessoais.valid){
      this.step++;
    }
  }

  prevStep() {
    this.step--;
  }

  onSubmit() {
    // Lógica de envio de formulário

    if(this.formDadosPessoais.value.password !== this.formDadosPessoais.value.confirmPassword){
      alert('senhas diferentes')
    }

  }

  selectPlan(plan: string): void {
    //this.form.setValue('plan', plan);
    this.formDadosPagamento.get('plan')?.setValue(plan);
  }

  passwordMatch(): ValidationErrors |null{
    return (form: FormGroup) =>{
      const password = form.controls['password'].value;
      const confirmation = form.controls['confirmPassword'].value;
    
      if(password !== confirmation){
        return {confirmedValidator: true};
      }
      return null;
    }
    }
}

