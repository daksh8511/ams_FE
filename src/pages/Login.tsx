import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { Label } from "@/components/ui/label"
import { useFormik } from "formik"
import { Eye, EyeOff } from "lucide-react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import * as Yup from 'yup'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Email are requied").email("Invalid format"),
      password: Yup.string().required("Password are required").min(8, "Be at least 8 characters long")
    }),
    onSubmit: (value) => {
      navigate('/dashboard')
    }
  })

  const handleSubmit = () => {
    formik?.handleSubmit()
  }

  return (
    <div className="relative">
      <Card className="w-1/4 absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2">
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={formik?.handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  value={formik?.values?.email}
                  onChange={(e) => formik?.setFieldValue('email', e.target.value)}
                />
                {
                  formik?.errors?.email && formik?.touched?.email && (
                    <span className="text-red-500">{formik?.errors?.email}</span>
                  )
                }
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <InputGroup>
                  <InputGroupInput
                    placeholder="Enter password"
                    type={showPassword ? "text" : "password"}
                    value={formik?.values?.password}
                    required
                    onChange={(e) => formik?.setFieldValue('password', e.target.value)}
                  />


                  <InputGroupAddon align="inline-end">
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="px-2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </InputGroupAddon>
                </InputGroup>
                {
                  formik?.errors?.password && formik?.touched?.password && (
                    <span className="text-red-500">{formik?.errors?.password}</span>
                  )
                }

              </div>
            </div>
            <CardFooter className="w-full p-0 mt-5">
              <Button type="submit" className="w-full" onClick={handleSubmit}>
                Login
              </Button>
            </CardFooter>
          </form>

        </CardContent>

      </Card>
    </div>
  )
}

export default Login