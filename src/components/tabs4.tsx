"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export function PasswordGenerator() {
  const [passwordLength, setPasswordLength] = useState(12);
  const [generatedPassword, setGeneratedPassword] = useState("");

  const generatePassword = (length: number) => {
    const charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}[]|:;<>,.?";
    let password = "";
    for (let i = 0; i < length; i++) {
      password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return password;
  };

  useEffect(() => {
    setGeneratedPassword(generatePassword(passwordLength));
  }, [passwordLength]);

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Generador de Contraseña</CardTitle>
        <CardDescription>
          Ajusta la longitud de la contraseña y genera una nueva.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-1">
          <Label htmlFor="password">Contraseña Generada</Label>
          <Input id="password" value={generatedPassword} readOnly />
        </div>
        <div className="space-y-1">
          <Label htmlFor="password-length">
            Longitud de la Contraseña: {passwordLength}
          </Label>
          <Slider
            id="password-length"
            min={8}
            max={32}
            step={1}
            value={[passwordLength]}
            onValueChange={(value) => setPasswordLength(value[0])}
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button
          onClick={() => setGeneratedPassword(generatePassword(passwordLength))}
        >
          Generar Nueva Contraseña
        </Button>
      </CardFooter>
    </Card>
  );
}
